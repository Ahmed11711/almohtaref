import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://almohtaref-sa.com"),

  title: {
    default: "المحترف | افضل شركة قص وتخريم خرسانة بجدة ومكة والطائف",
    template: "%s | المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف",
  },

  // ======= META DESCRIPTION JAZAB =======
  description:
    "المحترف لقص وتخريم الخرسانة بجدة ومكة والطائف – عروض وخصومات حصرية الآن! تنفيذ سريع، أسعار منافسة، خدمة 24 ساعة. اتصل واحصل على افضل النتائج!",

   keywords: [
    "المحترف",
    "شركة المحترف",
    "مؤسسة المحترف",
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
    "قص خرسانة بدون تكسير",
    "قص خرسانة بالمنشار",
    "قص خرسانة بالواير",
    "قص خرسانة بالماس",
    "تخريم خرسانة بالليزر",
    "تخريم خرسانة بالماس",
    "فتح فتحات مصاعد",
    "قص خرسانة للمصاعد",
    "فتح فتحات تكييف",
    "فتح فتحات تهوية",
    "قص خرسانة للمباني",
    "قص خرسانة للفلل",
    "قص خرسانة للمشاريع",
    "قص خرسانة بجدة",
    "تخريم خرسانة بجدة",
    "فتح كور بجدة",
    "قص جدران بجدة",
    "قص بلاطات بجدة",
    "قص خرسانة ليزري بجدة",
    "قص خرسانة بدون تكسير بجدة",
    "فتح فتحات خرسانية بجدة",
    "قص خرسانة للمصاعد بجدة",
    "أفضل شركة قص خرسانة بجدة",
    "شركة تخريم خرسانة بجدة",
    "قص وتخريم الخرسانة جدة",
    "قص خرسانة بمكة",
    "تخريم خرسانة بمكة",
    "فتح كور بمكة",
    "قص جدران بمكة",
    "قص خرسانة ليزري بمكة",
    "قص خرسانة بدون تكسير بمكة",
    "فتح فتحات خرسانية بمكة",
    "قص خرسانة للمصاعد بمكة",
    "أفضل شركة قص خرسانة بمكة",
    "شركة تخريم خرسانة بمكة",
    "قص وتخريم الخرسانة مكة",
    "قص خرسانة بالطائف",
    "تخريم خرسانة بالطائف",
    "فتح كور بالطائف",
    "قص جدران بالطائف",
    "قص خرسانة ليزري بالطائف",
    "قص خرسانة بدون تكسير بالطائف",
    "فتح فتحات خرسانية بالطائف",
    "قص خرسانة للمصاعد بالطائف",
    "أفضل شركة قص خرسانة بالطائف",
    "شركة تخريم خرسانة بالطائف",
    "قص وتخريم الخرسانة الطائف",
    "قص خرسانة بالسعودية",
    "تخريم خرسانة بالسعودية",
    "فتح كور بالسعودية",
    "افضل شركة قص خرسانة بالسعودية",
    "شركة قص وتخريم خرسانة",
    "مقاول قص خرسانة",
    "مقاول تخريم خرسانة",
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
    title: "المحترف | قص وتخريم الخرسانة بجدة ومكة والطائف",
    description:
      "أفضل شركة قص وتخريم خرسانة وفتح الكور وفتحات المصاعد في السعودية – احصل على عروض وخصومات حصرية!",
    url: "https://almohtaref-sa.com/",
    siteName: "المحترف لقص وتخريم الخرسانة",
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "المحترف لقص وتخريم الخرسانة",
    description:
      "أفضل شركة قص وتخريم خرسانة بجدة ومكة والطائف – عروض وخصومات حصرية، تنفيذ سريع، أسعار منافسة، خدمة 24 ساعة.",
  },

  icons: {
    icon: "/المحترف.jpg",
    shortcut: "/المحترف.jpg",
    apple: "/المحترف.jpg",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              name: "المحترف لقص وتخريم الخرسانة",
              url: "https://almohtaref-sa.com",
              telephone: "+966534309221",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "Makkah",
              },
              areaServed: ["Jeddah", "Makkah", "Taif"],
              openingHours: "Mo-Su 00:00-23:59",
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/المحترف.jpg" />
        <link rel="shortcut icon" href="/المحترف.jpg" />
        <link rel="apple-touch-icon" href="/المحترف.jpg" />
      </head>

      <body className="antialiased">
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
