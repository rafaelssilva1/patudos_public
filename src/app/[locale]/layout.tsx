import type { Metadata } from "next";
import GlobalStyles from "../global.styles";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Patudos Vagos",
  description: "Grupo de resgate e ajuda animal",
};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <html lang={locale}>
      <GlobalStyles />
      <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}>
        <body>{children}
  
        <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=TXTMKRGC`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'TXTMKRGC');
  `,
        }}
      />
        </body>
      </ReCaptchaProvider>
    </html>
  );
};

export default RootLayout;
