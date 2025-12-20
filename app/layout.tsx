import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://almohtaref-sa.com"),

  title: {
    default:
      "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف | Almohtaref Concrete Cutting",
    template: "%s | المحترف لقص وتخريم الخرسانة",
  },

  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف. قص خرسانة، تخريم كور، فتح فتحات مصاعد وجدران باستخدام المناشير الليزرية الحديثة. خدمة 24 ساعة. اتصل الآن: +966534309221",

  keywords: [
    "المحترف",
    "شركة المحترف",
    "المحترف لقص وتخريم الخرسانة",
    "Almohtaref",
    "Almohtaref Concrete Cutting",
    "Almohtaref Core Drilling",

    "قص وتخريم الخرسانة",
    "قص خرسانة",
    "تخريم خرسانة",
    "فتح كور",
    "فتح فتحات خرسانية",
    "قص جدران خرسانية",
    "قص بلاطات خرسانية",
    "قص خرسانة ليزري",
    "قص خرسانة بدون اهتزاز",
    "قص خرسانة بالمنشار",
    "قص خرسانة بالواير",
    "تخريم خرسانة بالليزر",
    "فتح فتحات مصاعد",
    "قص خرسانة للمصاعد",

    "قص خرسانة بجدة",
    "تخريم خرسانة بجدة",
    "فتح كور بجدة",
    "قص جدران بجدة",
    "قص بلاطات بجدة",
    "أفضل شركة قص خرسانة بجدة",

    "قص خرسانة بمكة",
    "تخريم خرسانة بمكة",
    "فتح كور بمكة",
    "قص جدران بمكة",
    "أفضل شركة قص خرسانة بمكة",

    "قص خرسانة بالطائف",
    "تخريم خرسانة بالطائف",
    "فتح كور بالطائف",
    "قص جدران بالطائف",
    "أفضل شركة قص خرسانة بالطائف",

    "قص خرسانة بالسعودية",
    "تخريم خرسانة بالسعودية",
    "أفضل شركة قص خرسانة بالسعودية",

    "Concrete Cutting",
    "Concrete Cutting Jeddah",
    "Concrete Cutting Makkah",
    "Concrete Cutting Taif",
    "Concrete Cutting Saudi Arabia",
    "Core Drilling",
    "Laser Concrete Cutting",
    "Diamond Concrete Cutting",
  ],

  alternates: {
    canonical: "https://almohtaref-sa.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "المحترف لقص وتخريم الخرسانة | Concrete Cutting & Core Drilling",
    description:
      "Concrete cutting & core drilling services in Jeddah, Makkah & Taif. Call +966534309221",
    url: "https://almohtaref-sa.com/",
    siteName: "المحترف لقص وتخريم الخرسانة",
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "المحترف لقص وتخريم الخرسانة",
    description:
      "أفضل شركة قص وتخريم خرسانة بالسعودية – تواصل الآن",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "المحترف لقص وتخريم الخرسانة",
              "url": "https://almohtaref-sa.com",
              "telephone": "+966534309221",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "Makkah",
              },
              "areaServed": ["Jeddah", "Makkah", "Taif"],
              "openingHours": "Mo-Su 00:00-23:59",
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQXKSZCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-black focus:rounded"
        >
          تخطّي إلى المحتوى
        </a>

        <LanguageProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <ConditionalFloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
