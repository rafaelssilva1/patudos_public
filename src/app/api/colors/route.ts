import executeQuery from "@base/db/db";
import { ColorType } from "./colors.types";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request) => {
  const url = new URL(req.url);
  const locale = url.searchParams.get("locale");

  if (!locale) return Response.json({ error: "Missing locale param" });

  try {
    const data = (await executeQuery({
      query: "SELECT id, name, code, locale FROM colors WHERE locale REGEXP(?)",
      values: [locale],
    })) as ColorType[];
    if (!data.length)
      return Response.json(
        { error: "Record not found" },
        {
          status: 404,
        },
      );
    return Response.json(data);
  } catch (error) {
    Response.json(error);
  }
};

const POST = async (req: Request) => {
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

  try {
    for (let i = 0; i < array.length; i++) {
      const id = array[i].id;
      const name = array[i].name;
      const locale = array[i].locale;
      const code = array[i].code;

      await executeQuery({
        query:
          "INSERT INTO colors (id, locale, name, code) VALUES (?, ? , ?, ?)",
        values: [id, locale, name, code],
      });
    }

    return Response.json({ message: "created" });
  } catch (error) {
    Response.json(error);
  }
};

export { GET, POST };
