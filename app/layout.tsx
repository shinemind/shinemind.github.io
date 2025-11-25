import type { Metadata } from "next";
import { Inter_Tight, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter_Tight({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"], variable: "--font-heading" });
const GA_MEASUREMENT_ID = "G-LJ32B2RH7L";

export const metadata: Metadata = {
  metadataBase: new URL('https://shinemind.app'),
  title: {
    default: "ShineMind - AI Wellness App | Meditation, Gratitude & Goal Tracking",
    template: "%s | ShineMind"
  },
  description: "Transform your daily routine with AI-powered wellness insights, guided meditation, gratitude journaling, and goal tracking. Start and end your day mindfully with ShineMind's personalized wellness routines.",
  keywords: [
    "meditation app",
    "wellness app",
    "mindfulness",
    "mental health app",
    "gratitude journal",
    "goal tracking",
    "AI wellness coach",
    "daily affirmations",
    "sleep sounds",
    "morning routine",
    "evening routine",
    "guided meditation",
    "mental wellness",
    "self-care app",
    "mindful living"
  ],
  authors: [{ name: "ShineMind Team" }],
  creator: "ShineMind",
  publisher: "ShineMind",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shinemind.app',
    siteName: 'ShineMind',
    title: 'ShineMind - AI Wellness App | Meditation, Gratitude & Goal Tracking',
    description: 'Transform your daily routine with AI-powered wellness insights, guided meditation, gratitude journaling, and goal tracking. Start your mindful journey today.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ShineMind - AI-Powered Wellness App',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShineMind - AI Wellness App | Meditation, Gratitude & Goal Tracking',
    description: 'Transform your daily routine with AI-powered wellness insights, guided meditation, gratitude journaling, and goal tracking.',
    images: ['/logo.png'],
    creator: '@shinemindapp',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ShineMind',
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: 'https://shinemind.app',
  },
  category: 'Health & Wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ShineMind",
    "url": "https://shinemind.app",
    "logo": "https://shinemind.app/logo.png",
    "description": "Transform your daily routine with AI-powered wellness insights, guided meditation, gratitude journaling, and goal tracking.",
    "sameAs": [
      "https://apps.apple.com/us/app/shinemind/id6754637065"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@shinemind.app",
      "contactType": "Customer Support"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "ShineMind",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "49.99",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "ShineMind is an AI-powered wellness app that helps you transform your daily routine with guided meditation, gratitude journaling, goal tracking, daily affirmations, and sleep sounds.",
    "screenshot": "https://shinemind.app/1.png",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "ShineMind"
    },
    "installUrl": "https://apps.apple.com/us/app/shinemind/id6754637065",
    "featureList": [
      "AI-powered wellness insights",
      "Guided meditation sessions",
      "Gratitude journaling",
      "Goal tracking and management",
      "Daily affirmations",
      "Sleep sounds and relaxation",
      "Morning shine routine",
      "Evening wind down routine"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Structured Data - Software Application */}
        <Script
          id="software-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} ${sora.variable}`}>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
