import executeQuery from "@base/db/db";
import sendEmail from "@base/service/mailService";
import { EMAIL_REGEX } from "@base/utils/regex";
import { AdoptionRequestsTypes } from "./adoptions.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request) => {
  const url = new URL(req.url);
  const limit = Number(url.searchParams.get("limit"));

  const token = req.headers.get("x-jwt-token");

  const verifyToken = verifyJwtToken({ token });

  if (!verifyToken) {
    return Response.json(
      { error: "Record not found" },
      {
        status: 404,
      },
    );
  }

  try {
    const data = (await executeQuery({
      query:
        "SELECT id, pet_id, name, email, phone, pets_at_home, how_many_pets, pet_types, how_many_sterilized, municipality, adoption_status FROM adoption_requests ORDER BY adoption_status ASC LIMIT ?",
      values: [limit],
    })) as AdoptionRequestsTypes;

    if (!data)
      return Response.json(
        { error: "Record not found" },
        {
          status: 404,
        },
      );

    const count = (await executeQuery({
      query: "SELECT COUNT(*) AS count FROM adoption_requests",
      values: [],
    })) as AdoptionRequestsTypes;

    return Response.json({ data, count });
  } catch (error) {
    Response.json(error);
  }
};

const POST = async (req: Request) => {
  const {
    full_name,
    email,
    phone,
    municipality,
    pets_at_home,
    how_many_pets,
    pet_types,
    how_many_sterilized,
    pet,
    pet_id,
    locale,
    isValid,
  } = await req.json();

  const stringFields = [full_name, phone, municipality, pet_types];
  const areStringFieldsInvalid = !!stringFields.find(
    (el) => typeof el !== "string",
  );

  const numberFields = [how_many_pets, how_many_sterilized];
  const areNumberFieldsInvalid = !!numberFields.find(
    (el) => typeof Number(el) !== "number",
  );

  const isEmailInvalid = !String(email).match(EMAIL_REGEX);

  const petsAtHomeText = pets_at_home === "1" ? "Sim" : "Não";

  if (
    isEmailInvalid ||
    areNumberFieldsInvalid ||
    areStringFieldsInvalid ||
    !isValid
  ) {
    return Response.json(
      { message: "An error has occurred" },
      {
        status: 400,
      },
    );
  }

  const text = `Olá. Receberam um pedido de adoção através do website. Animal: ${pet}; Nome: ${full_name}; Email: ${email}; Telemóvel: ${phone}; Concelho: ${municipality}; Tem animais tem em casa: ${petsAtHomeText}; Quantos: ${how_many_pets}; Quais: ${pet_types}; Quantos são esterilizados: ${how_many_sterilized}; Nome: ${full_name}; Nome: ${full_name}`;
  const html = `<p>Olá. Receberam um pedido de adoção através do website:</p>
    <ul>
    <li>Animal: ${pet}</li>
    <li>Nome: ${full_name}</li>
    <li>Email: ${email}</li>
    <li>Telemóvel: ${phone}</li>
    <li>Concelho: ${municipality}</li>
    <li>Tem animais tem em casa: ${petsAtHomeText}</li>
    <li>Quantos: ${how_many_pets}</li>
    <li>Quais: ${pet_types}</li>
    <li>Quantos são esterilizados: ${how_many_sterilized}</li>
    </ul>`;

  const textToAdoptant = `${
    locale === "pt"
      ? "Recebemos o seu pedido de adoção. Iremos analisá-lo e entraremos em contacto o mais brevemente possível."
      : "We have received your adoption request. We will analyse it and reach out as soon as possible."
  }`;
  const htmlToAdoptant = `<p>${
    locale === "pt"
      ? "Recebemos o seu pedido de adoção. Iremos analisá-lo e entraremos em contacto o mais brevemente possível."
      : "We have received your adoption request. We will analyse it and reach out as soon as possible."
  }</p>`;
  const subjectToAdoptant = `${
    locale === "pt" ? "Pedido de Adoção Recebido" : "Adoption request received"
  }`;

  try {
    await executeQuery({
      query:
        "INSERT INTO `adoption_requests`(`pet_id`, `name`, `email`, `phone`, `pets_at_home`, `how_many_pets`, `pet_types`, `how_many_sterilized`, `municipality`, `adoption_status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        pet_id,
        full_name,
        email,
        phone,
        pets_at_home,
        how_many_pets,
        pet_types,
        how_many_sterilized,
        municipality,
        "1",
      ],
    });

    await sendEmail({
      subject: "Pedido de Adoção",
      toEmail: "adocao@patudosvagos.pt",
      text,
      html,
    });

    await sendEmail({
      subject: subjectToAdoptant,
      toEmail: email,
      text: textToAdoptant,
      html: htmlToAdoptant,
    });

    return Response.json(
      { message: "Success" },
      {
        status: 200,
      },
    );
  } catch (err) {
    return Response.json(
      { error: (err as Error).message },
      {
        status: 404,
      },
    );
  }
};

export { GET, POST };
