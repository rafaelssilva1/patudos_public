import executeQuery from "@base/db/db";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  const { statusId } = await req.json();

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
      query: "UPDATE adoption_requests SET adoption_status = ? WHERE id = ?",
      values: [statusId, id],
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

export { PUT };
