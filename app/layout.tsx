import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title:
    "المحترفون لقص وتخريم الخرسانة بجدة ومكة والطائف | قص خرسانة وفتح كور",
  description:
    "المحترفون لقص وتخريم الخرسانة بجدة ومكة والطائف. خدمات قص الخرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد وفتحات كور بدقة عالية وسرعة تنفيذ. خدمة 24 ساعة.",
  keywords: [
    "قص خرسانة",
    "قص خرسانة جدة",
    "تخريم خرسانة",
    "تخريم كور",
    "قص جدران بالمنشار الليزر",
    "فتح كور",
    "عمل فتحات مصاعد",
    "شركة قص خرسانة",
    "شركة تخريم خرسانة",
    "قص خرسانة مكة",
    "قص خرسانة الطائف",
  ],
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

        {/* Google Ads Global Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17727676448"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Google Ads Conversion ID
              gtag('config', 'AW-17727676448');

              // Tracking Call Clicks
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

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "المحترفون لقص وتخريم الخرسانة",
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
  "areaServed": [
    "جدة",
    "مكة",
    "الطائف"
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
      "name": "المحترفون لقص وتخريم الخرسانة بجدة",
      "telephone": "+966548677162",
      "address": { "@type": "PostalAddress", "addressRegion": "جدة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترفون لقص وتخريم الخرسانة بمكة",
      "telephone": "+966548677162",
      "address": { "@type": "PostalAddress", "addressRegion": "مكة", "addressCountry": "SA" }
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترفون لقص وتخريم الخرسانة بالطائف",
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
