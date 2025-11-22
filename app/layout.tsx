import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف | قص خرسانة وفتح كور",
  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف. خدمات قص الخرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد وفتحات كور بدقة عالية وسرعة تنفيذ. خدمة 24 ساعة. للتواصل: 966548677162",
  keywords: [
    "المحترف",
    "المحترف لقص الخرسانة",
    "قص خرسانة",
    "قص خرسانة بجدة",
    "قص خرسانة في جدة",
    "تخريم خرسانة",
    "تخريم خرسانة بجدة",
    "تخريم خرسانة في جدة",
    "قص جدران بالمنشار الليزر",
    "قص جدران بالمنشار الليزر بجدة",
    "عمل فتحات للمصاعد",
    "عمل فتحات للمصاعد بجدة",
    "عمل فتحات كور",
    "عمل فتحات كور بجدة",
    "فتح كور",
    "فتح كور بجدة",
    "شركة قص خرسانة",
    "شركة قص خرسانة بجدة",
    "شركة تخريم خرسانة",
    "شركة تخريم خرسانة بجدة",
    "قص وتخريم الخرسانة",
    "قص وتخريم الخرسانة بجدة",
    "قص خرسانة مكة",
    "تخريم خرسانة مكة",
    "قص جدران بالمنشار الليزر مكة",
    "فتح كور مكة",
    "عمل فتحات للمصاعد مكة",
    "عمل فتحات كور مكة",
    "قص خرسانة الطايف",
    "تخريم خرسانة الطايف",
    "قص جدران بالمنشار الليزر الطايف",
    "فتح كور الطايف",
    "عمل فتحات للمصاعد الطايف",
    "عمل فتحات كور الطايف",
    "أفضل شركة قص خرسانة",
    "أفضل شركة قص وتخريم خرسانة",
    "أفضل شركة فتح كور",
    "أرخص شركة قص خرسانة",
    "شركة قص خرسانة معتمدة",
    "قص خرسانة بالمنشار",
    "قص خرسانة بالرياض" 
  ],

  alternates: {
    canonical: "https://almohtaref-sa.com/",
  },

  openGraph: {
    title: "المحترف لقص وتخريم الخرسانة | جدة مكة الطائف",
    description:
      "خدمات قص وتخريم الخرسانة بجدة ومكة والطائف. قص خرسانة، تخريم كور، قص منشار ليزر، فتحات مصاعد وكور.",
    url: "https://almohtaref-sa.com/",
    siteName: "المحترف لقص وتخريم الخرسانة",
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

        <meta name="telephone" content="966548677162" />

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

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "المحترف لقص وتخريم الخرسانة",
  "description": "خدمات قص وتخريم الخرسانة في جدة ومكة والطائف. قص خرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد وفتح كور.",
  "url": "https://almohtaref-sa.com/",
  "telephone": "+966548677162",
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
      "telephone": "+966548677162",
      "address": { "@type": "PostalAddress", "addressRegion": "جدة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بمكة",
      "telephone": "+966548677162",
      "address": { "@type": "PostalAddress", "addressRegion": "مكة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بالطائف",
      "telephone": "+966548677162",
      "address": { "@type": "PostalAddress", "addressRegion": "الطايف", "addressCountry": "SA" }
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
