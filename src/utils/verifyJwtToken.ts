import jwt, { Secret } from "jsonwebtoken";

const verifyJwtToken = ({ token }: { token: string | null }) => {
  const jwtSecretKey = process.env.JWT_SECRET as Secret;

  const verifyToken =
    token &&
    jwt.verify(token, jwtSecretKey, (err) => {
      if (
        err?.message === "jwt expired" ||
        err?.message === "invalid signature"
      ) {
        return false;
      } else {
        return true;
      }
    });

  return verifyToken;
};

export default verifyJwtToken;
