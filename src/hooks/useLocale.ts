import { useLocale as NextIntlUseLocale } from "next-intl";
import i18n from "@base/i18n/i18nConfig";

const useLocale = () => {
  const locale = NextIntlUseLocale();
  const { defaultLocale, locales } = i18n;

  return {
    locale,
    defaultLocale,
    locales,
  };
};

export default useLocale;
