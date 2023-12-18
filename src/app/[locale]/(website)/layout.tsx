import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@base/components/footer/Footer";
import Header from "@base/components/header/Header";

const LocaleLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  let messages;
  try {
    messages = (await import(`@base/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
