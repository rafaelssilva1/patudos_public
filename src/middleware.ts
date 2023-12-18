import createMiddleware from "next-intl/middleware";
import i18n from "./i18n/i18nConfig";

export default createMiddleware(i18n);

// this tells the middleware to run only on requests to our app pages
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
