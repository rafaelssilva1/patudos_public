import executeQuery from "@base/db/db";
import { SizeType } from "../sizes.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  const url = new URL(req.url);
  const locale = url.searchParams.get("locale");

  if (!locale || !id) return Response.json({ error: "Unable to make request" });

  try {
    const sizes = (await executeQuery({
      query:
        "SELECT id, name, locale FROM sizes WHERE id = ? AND locale REGEXP(?)",
      values: [id, locale],
    })) as SizeType[];
    if (!sizes.length)
      return Response.json(
        { error: "Id not found" },
        {
          status: 404,
        },
      );

    return Response.json({ sizes });
  } catch (error) {
    Response.json(error);
  }
};

const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  const { array } = await req.json();

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

  if (!id) return Response.json({ error: "Unable to make request" });

  try {
    for (let i = 0; i < array.length; i++) {
      const id = array[i].id;
      const name = array[i].name;
      const locale = array[i].locale;

      await executeQuery({
        query: "UPDATE sizes SET name = ? WHERE id = ? AND locale REGEXP(?)",
        values: [name, id, locale],
      });
    }

    return Response.json({ message: "updated" });
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
  if (!id) return Response.json({ error: "Unable to make request" });

  try {
    await executeQuery({
      query: "DELETE FROM sizes WHERE id = ?",
      values: [id],
    });

    return Response.json({ message: "updated" });
  } catch (error) {
    Response.json(error);
  }
};

export { GET, PUT, DELETE };
