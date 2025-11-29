import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف | Almohtaref Concrete Cutting & Core Drilling",
  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف — قص خرسانة، تخريم كور، فتحات مصاعد وجدران بالمنشار الليزري. خبرة واحترافية 24 ساعة. تواصل الآن: +966534309221 | Almohtaref Concrete Cutting & Core Drilling.",
  keywords: [
    "قص خرسانة بجدة",
    "تخريم خرسانة بجدة",
    "فتح كور بجدة",
    "قص جدران بالمنشار بجدة",
    "قص خرسانة ليزري بجدة",
    "قص خرسانة بدون اهتزاز بجدة",
    "فتح كور ليزري بجدة",
    "قص وتخريم الخرسانة بجدة",
    "أفضل شركة قص خرسانة بجدة",
    "عمل فتحات مصاعد بجدة",

    "قص خرسانة بمكة",
    "تخريم خرسانة بمكة",
    "فتح كور بمكة",
    "قص جدران بالمنشار بمكة",
    "قص ليزر بمكة",

    "قص خرسانة بالطائف",
    "تخريم خرسانة بالطائف",
    "فتح كور بالطائف",
    "قص جدران بالطائف",

    "Concrete Cutting Jeddah",
    "Core Drilling Jeddah",
    "Concrete Cutting Makkah",
    "Concrete Cutting Taif",
    "Concrete Cutting Saudi Arabia",
  ],

  alternates: {
    canonical: "https://almohtaref-sa.com/",
  },

  openGraph: {
    title:
      "Almohtaref Concrete Cutting & Core Drilling | المحترف لقص وتخريم الخرسانة",
    description:
      "Concrete cutting & core drilling in Jeddah, Makkah & Taif. Professional concrete services. Call Now: +966534309221",
    url: "https://almohtaref-sa.com/",
    siteName: "Almohtaref Concrete Cutting",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KQXKSZCV');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className="antialiased">

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQXKSZCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-black focus:font-bold focus:rounded focus:shadow-lg"
        >
          تخطّي إلى المحتوى
        </a>

        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <ConditionalFloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
