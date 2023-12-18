import executeQuery from "@base/db/db";
import { PetType, PetsType } from "./pets.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request) => {
  const url = new URL(req.url);
  const locale = url.searchParams.get("locale");
  const limit = Number(url.searchParams.get("limit"));
  const type =
    url.searchParams.get("type") === "undefined"
      ? ""
      : url.searchParams.get("type");
  const color =
    url.searchParams.get("color") === "undefined"
      ? ""
      : url.searchParams.get("color");
  const sex =
    url.searchParams.get("sex") === "undefined"
      ? ""
      : url.searchParams.get("sex");
  const size =
    url.searchParams.get("size") === "undefined"
      ? ""
      : url.searchParams.get("size");
  const specialNeeds =
    url.searchParams.get("specialneeds") === "undefined"
      ? ""
      : url.searchParams.get("specialneeds");
  const searchFilter =
    url.searchParams.get("searchFilter") === "undefined"
      ? ""
      : url.searchParams.get("searchFilter");
  const ignoreAdopted =
    url.searchParams.get("ignoreAdopted") === "undefined"
      ? ""
      : url.searchParams.get("ignoreAdopted");

  if (!locale) return Response.json({ error: "Missing locale param" });

  const ignoreAdoptedAnimais = ignoreAdopted !== "1" ? "1|2" : "";

  try {
    let data: PetType[] = [];
    let count: PetType[] = [];
    if (searchFilter) {
      data = (await executeQuery({
        query:
          "SELECT id, type, name, birthDate, color, pickupDate, sex, image, pet_status, locale FROM pets WHERE locale REGEXP(?) AND (name REGEXP(?) OR color REGEXP(?)) LIMIT ?",
        values: [locale, searchFilter, searchFilter, limit],
      })) as PetsType;

      count = (await executeQuery({
        query:
          "SELECT COUNT(*) as count FROM pets WHERE locale REGEXP(?) AND (name REGEXP(?) OR color REGEXP(?)) LIMIT ?",
        values: [locale, searchFilter, searchFilter, limit],
      })) as PetsType;
    } else {
      data = (await executeQuery({
        query:
          "SELECT id, type, name, birthDate, color, pickupDate, sex, image, pet_status, locale FROM pets WHERE locale REGEXP(?) AND type REGEXP(?) AND color REGEXP(?) AND sex REGEXP(?) AND size REGEXP(?) AND specialNeeds REGEXP(?) AND pet_status REGEXP(?) LIMIT ?",
        values: [
          locale,
          type,
          color,
          sex,
          size,
          specialNeeds,
          ignoreAdoptedAnimais,
          limit,
        ],
      })) as PetsType;

      count = (await executeQuery({
        query:
          "SELECT COUNT(*) AS count FROM pets WHERE locale REGEXP('pt') AND type REGEXP(?) AND color REGEXP(?) AND sex REGEXP(?) AND size REGEXP(?) AND specialNeeds REGEXP(?) AND pet_status REGEXP(?)",
        values: [type, color, sex, size, specialNeeds, ignoreAdoptedAnimais],
      })) as PetsType;
    }

    if (!data.length)
      return Response.json(
        { error: "Record not found" },
        {
          status: 404,
        },
      );

    return Response.json({ data, count });
  } catch (error) {
    Response.json(error);
  }
};

const POST = async (req: Request) => {
  const body = await req.json();

  const {
    id,
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
    shortDescriptionPt,
    descriptionPt,
    shortDescriptionEn,
    descriptionEn,
    color,
    birthDate,
    pickupDate,
    type,
  } = body;

  const token = req.headers.get("x-jwt-token");

  const verifyToken = verifyJwtToken({ token });

  if (!verifyToken) {
    return Response.json(
      { error: "Unauthorized" },
      {
        status: 401,
      },
    );
  }

  try {
    await executeQuery({
      query:
        "INSERT INTO pets(name, size, sex, vaccinated, sterilized, dewormed, fivFelv, specialNeeds, pet_status, image, color, birthDate, pickupDate, id, shortDescription, description, type, locale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pt')",
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
        id,
        shortDescriptionPt,
        descriptionPt,
        type,
      ],
    });
    await executeQuery({
      query:
        "INSERT INTO pets(name, size, sex, vaccinated, sterilized, dewormed, fivFelv, specialNeeds, pet_status, image, color, birthDate, pickupDate, id, shortDescription, description, type, locale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'en')",
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
        id,
        shortDescriptionEn,
        descriptionEn,
        type,
      ],
    });

    return Response.json({ message: "pet created" });
  } catch (error) {
    Response.json(error);
  }
};

export { GET, POST };
