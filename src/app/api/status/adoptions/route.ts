import executeQuery from "@base/db/db";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const GET = async (req: Request) => {
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
    const data = await executeQuery({
      query: "SELECT id, name FROM adoption_status",
      values: [],
    });

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

export { GET };
