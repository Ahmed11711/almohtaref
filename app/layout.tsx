import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف | Almohtaref Concrete Cutting & Core Drilling",
  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف — قص خرسانة، تخريم كور، فتحات مصاعد وجدران بالمنشار الليزري. خبرة واحترافية 24 ساعة. تواصل الآن: +966534309221 | Almohtaref Concrete Cutting & Core Drilling in Jeddah, Makkah & Taif. Professional concrete cutting, core drilling & wall sawing services. Call Now: +966534309221",

  keywords: [
    // Arabic – جدة
    "قص خرسانة بجدة",
    "تخريم خرسانة بجدة",
    "فتح كور بجدة",
    "قص جدران بالمنشار بجدة",
    "قص خرسانة ليزري بجدة",
    "قص خرسانة بدون اهتزاز بجدة",
    "فتح كور ليزري بجدة",
    "قص وتخريم الخرسانة بجدة",
    "أفضل شركة قص خرسانة بجدة",
    "أفضل شركة تخريم خرسانة بجدة",
    "عمل فتحات مصاعد بجدة",

    // Arabic – مكة
    "قص خرسانة بمكة",
    "تخريم خرسانة بمكة",
    "فتح كور بمكة",
    "قص جدران بالمنشار بمكة",
    "قص خرسانة ليزري بمكة",
    "قص خرسانة بدون اهتزاز بمكة",
    "فتح كور ليزري بمكة",
    "قص وتخريم الخرسانة بمكة",
    "أفضل شركة قص خرسانة بمكة",
    "أفضل شركة تخريم خرسانة بمكة",
    "عمل فتحات مصاعد بمكة",

    // Arabic – الطائف
    "قص خرسانة بالطائف",
    "تخريم خرسانة بالطائف",
    "فتح كور بالطائف",
    "قص جدران بالمنشار بالطائف",
    "قص خرسانة ليزري بالطائف",
    "قص خرسانة بدون اهتزاز بالطائف",
    "فتح كور ليزري بالطائف",
    "قص وتخريم الخرسانة بالطائف",
    "أفضل شركة قص خرسانة بالطائف",
    "أفضل شركة تخريم خرسانة بالطائف",
    "عمل فتحات مصاعد بالطائف",

    // Arabic – السعودية
    "قص خرسانة بالسعودية",
    "تخريم خرسانة بالسعودية",
    "قص وتخريم خرسانة بالسعودية",
    "فتح كور بالسعودية",
    "قص جدران بالمنشار بالسعودية",
    "قص خرسانة بالسعودية جدة مكة الطائف",
    "شركة قص خرسانة في السعودية",
    "شركة تخريم خرسانة في السعودية",
    "قص ليزري للخرسانة بالسعودية",

    // English – Jeddah
    "Concrete Cutting Jeddah",
    "Concrete Core Drilling Jeddah",
    "Core Drilling in Jeddah",
    "Wall Sawing Jeddah",
    "Laser Concrete Cutting Jeddah",
    "Diamond Cutting Jeddah",
    "Concrete Opening Jeddah",
    "Concrete Contractor Jeddah",
    "Best Concrete Cutting Jeddah",
    "Core Drilling Company Jeddah",

    // English – Makkah
    "Concrete Cutting Makkah",
    "Concrete Core Drilling Makkah",
    "Core Drilling in Makkah",
    "Wall Sawing Makkah",
    "Laser Concrete Cutting Makkah",
    "Diamond Cutting Makkah",
    "Concrete Opening Makkah",
    "Concrete Contractor Makkah",
    "Best Concrete Cutting Makkah",
    "Core Drilling Company Makkah",

    // English – Taif
    "Concrete Cutting Taif",
    "Concrete Core Drilling Taif",
    "Core Drilling in Taif",
    "Wall Sawing Taif",
    "Laser Concrete Cutting Taif",
    "Diamond Cutting Taif",
    "Concrete Opening Taif",
    "Concrete Contractor Taif",
    "Best Concrete Cutting Taif",
    "Core Drilling Company Taif",

    // English – Saudi Arabia
    "Concrete Cutting Saudi Arabia",
    "Core Drilling Saudi Arabia",
    "Concrete Coring Saudi Arabia",
    "Wall Sawing Saudi Arabia",
    "Laser Concrete Cutting Saudi Arabia",
    "Diamond Concrete Cutting Saudi Arabia",
    "Concrete Contractor Saudi Arabia",
    "Best Concrete Cutting Company Saudi Arabia",
    "Core Drilling Company Saudi Arabia",
    "Concrete Cutting Near Me",
    "Concrete Coring Service Saudi Arabia",
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
        {/* Trusted Types Fix */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'&&window.trustedTypes&&window.trustedTypes.createPolicy){var p={createHTML:s=>s,createScript:s=>s,createScriptURL:s=>s};['default','nextjs#bundler','nextjs#app-renderer','nextjs#provision'].forEach(n=>{try{window.trustedTypes.createPolicy(n,p);}catch(e){}});}})();`,
          }}
        />

        <meta name="telephone" content="966534309221" />

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17727676448"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17727676448');

              function trackCall(){
                gtag('event', 'call_click', {
                  'event_category': 'engagement',
                  'event_label': 'phone_click',
                  'value': 1
                });
              }
              window.trackCall = trackCall;
            `,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KWZR5K6JW7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KWZR5K6JW7');
            `,
          }}
        />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "المحترف لقص وتخريم الخرسانة",
  "description": "خدمات قص وتخريم الخرسانة في جدة ومكة والطائف. قص خرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد وفتح كور.",
  "url": "https://almohtaref-sa.com/",
  "telephone": "+966534309221",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "جدة",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.543333,
    "longitude": 39.172779
  },
  "areaServed": ["جدة", "مكة", "الطائف"],
  "sameAs": [
    "https://almohtaref-sa.com/"
  ],
  "serviceType": [
    "قص خرسانة",
    "تخريم كور",
    "فتح كور",
    "قص جدران بالمنشار الليزر",
    "عمل فتحات مصاعد"
  ],
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بجدة",
      "telephone": "+966534309221",
      "address": { "@type": "PostalAddress", "addressRegion": "جدة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بمكة",
      "telephone": "+966534309221",
      "address": { "@type": "PostalAddress", "addressRegion": "مكة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بالطائف",
      "telephone": "+966534309221",
      "address": { "@type": "PostalAddress", "addressRegion": "الطائف", "addressCountry": "SA" }
    }
  ]
}`,
          }}
        />
      </head>

      <body className="antialiased">
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
