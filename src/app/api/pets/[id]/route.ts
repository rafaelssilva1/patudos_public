import executeQuery from "@base/db/db";
import { PetImageType, PetsType } from "../pets.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  const url = new URL(req.url);
  const locale = url.searchParams.get("locale");

  if (!locale || !id) return Response.json({ error: "Unable to make request" });

  try {
    const details = (await executeQuery({
      query: "SELECT * FROM pets WHERE id = ? AND locale REGEXP(?)",
      values: [id, locale],
    })) as PetsType;
    if (!details.length)
      return Response.json(
        { error: "Id not found" },
        {
          status: 404,
        },
      );

    const images = (await executeQuery({
      query: "SELECT * FROM images WHERE pet_id = ?",
      values: [id, locale],
    })) as PetImageType[];

    return Response.json({ details, images });
  } catch (error) {
    Response.json(error);
  }
};

const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  const body = await req.json();

  const {
    name,
    size,
    sex,
    type,
    vaccinated,
    sterilized,
    dewormed,
    fivFelv,
    specialNeeds,
    pet_status,
    image,
    shortDescriptionPt,
    descriptionPt,
    shortDescriptionEn,
    descriptionEn,
    color,
    birthDate,
    pickupDate,
  } = body;

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
  if (!id)
    return Response.json(
      { error: "unable to make request" },
      {
        status: 400,
      },
    );

  try {
    await executeQuery({
      query:
        "UPDATE pets SET name = ?, size = ?, sex = ?, vaccinated = ?, sterilized = ?, dewormed = ?, fivFelv = ?, specialNeeds = ?, pet_status = ?, image = ?, color = ?, birthDate = ?, pickupDate = ?, type = ? WHERE id = ?",
      values: [
        name,
        size,
        sex,
        vaccinated,
        sterilized,
        dewormed,
        fivFelv,
        specialNeeds,
        pet_status,
        image,
        color,
        birthDate,
        pickupDate,
        type,
        id,
      ],
    });

    await executeQuery({
      query:
        "UPDATE pets SET shortDescription = ?, description = ? WHERE id = ? AND locale = 'pt'",
      values: [shortDescriptionPt, descriptionPt, id],
    });
    await executeQuery({
      query:
        "UPDATE pets SET shortDescription = ?, description = ? WHERE id = ? AND locale = 'en'",
      values: [shortDescriptionEn, descriptionEn, id],
    });

    return Response.json({ message: "updated" });
  } catch (error) {
    Response.json(error);
  }
};

export { GET, PUT };
