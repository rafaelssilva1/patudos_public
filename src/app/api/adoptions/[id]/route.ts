import executeQuery from "@base/db/db";
import { AdoptionRequestsTypes } from "../adoptions.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

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
        "SELECT id, pet_id, name, email, phone, pets_at_home, how_many_pets, pet_types, how_many_sterilized, municipality, adoption_status FROM adoption_requests WHERE id = ?",
      values: [id],
    })) as AdoptionRequestsTypes;

    if (!data)
      return Response.json(
        { error: "Record not found" },
        {
          status: 404,
        },
      );

    return Response.json({ data });
  } catch (error) {
    Response.json(error);
  }
};

const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

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
      query: "DELETE FROM adoption_requests WHERE id = ?",
      values: [id],
    })) as AdoptionRequestsTypes;

    if (!data)
      return Response.json(
        { error: "Record not found" },
        {
          status: 404,
        },
      );

    return Response.json({ data });
  } catch (error) {
    Response.json(error);
  }
};

export { GET, DELETE };
