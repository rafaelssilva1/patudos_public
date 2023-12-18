import executeQuery from "@base/db/db";
import { LoginsType } from "./login.types";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

const POST = async (req: Request) => {
  const { username, password } = await req.json();

  const jwtSecretKey = process.env.JWT_SECRET as Secret;

  try {
    const data = (await executeQuery({
      query: "SELECT id, password FROM users WHERE username = ?",
      values: [username],
    })) as LoginsType;
    const passwordMatches = await bcrypt.compare(password, data[0].password);

    if (!passwordMatches)
      return Response.json(
        { error: "Email or password are incorrect" },
        {
          status: 404,
        },
      );

    const token = jwt.sign({ username, isUserLoggedIn: true }, jwtSecretKey, {
      expiresIn: "4h",
    });

    return Response.json({ token });
  } catch (error) {
    Response.json(error);
  }
};

export { POST };
