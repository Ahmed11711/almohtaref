import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata = {
  title: "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف | قص خرسانة وفتح كور",
  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف. خدمات قص الخرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد وفتحات كور بدقة عالية وسرعة تنفيذ. خدمة 24 ساعة. للتواصل: 966548677162",
  keywords: [
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
    "قص خرسانة الطائف",
    "تخريم خرسانة الطائف",
    "قص جدران بالمنشار الليزر الطائف",
    "فتح كور الطائف",
    "عمل فتحات للمصاعد الطائف",
    "عمل فتحات كور الطائف",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Meta Tag للهاتف */}
        <meta name="telephone" content="966548677162" />

        {/* TrustedTypes Fix */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'&&window.trustedTypes&&window.trustedTypes.createPolicy){try{window.trustedTypes.createPolicy('default',{createHTML:function(s){return s},createScript:function(s){return s},createScriptURL:function(u){return u}})}catch(e){console.warn('Trusted Types policy failed:',e)}}})();`,
          }}
        />

        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17727676448"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17727676448');
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
  "description": "المحترف متخصص في قص وتخريم الخرسانة بجدة ومكة والطائف. خدمات قص الخرسانة، تخريم كور، قص جدران بالمنشار الليزر، فتحات مصاعد، وفتح كور بدقة عالية. للتواصل: 966548677162",
  "url": "https://almohtaref-sa.com/",
  "telephone": "+966548677162",
  "areaServed": ["جدة", "مكة", "الطائف"],
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
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بجدة",
      "url": "https://almohtaref-sa.com/",
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
      "telephone": "+966548677162"
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بمكة",
      "url": "https://almohtaref-sa.com/",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "مكة",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.389082,
        "longitude": 39.857910
      },
      "telephone": "+966548677162"
    },
    {
      "@type": "LocalBusiness",
      "name": "المحترف لقص وتخريم الخرسانة بالطائف",
      "url": "https://almohtaref-sa.com/",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "الطائف",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.437273,
        "longitude": 40.512714
      },
      "telephone": "+966548677162"
    }
  ],
  "serviceType": [
    "قص خرسانة",
    "تخريم كور",
    "فتح كور",
    "قص جدران بالمنشار الليزر",
    "عمل فتحات المصاعد",
    "عمل فتحات كور"
  ]
}`,
          }}
        />
      </head>

      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FFDD00] focus:text-black focus:font-bold focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-offset-2"
        >
          Skip to main content
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
