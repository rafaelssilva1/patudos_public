import { cookies } from "next/headers";
import Login from "./Login";
import verifyJwtToken from "@base/utils/verifyJwtToken";

const LoginPage = () => {
  const cookiesList = cookies();

  const token = cookiesList.get("token")?.value || "";

  const verifyToken = verifyJwtToken({ token });

  return <Login isUserLoggedIn={!!verifyToken} />;
};

export default LoginPage;
