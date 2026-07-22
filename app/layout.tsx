import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Biruhken Ayana | Software Engineer & Fullstack Developer",
    template: "%s | Biruhken Ayana"
  },
  description: "Portfolio of Biruhken Ayana - Junior Software Engineer at BESYS Technologies. Specialized in MERN Stack, Go, Flutter, Vue.js, and Next.js. Building innovative solutions with cloud computing and payment integration expertise.",
  keywords: ["Biruhken Ayana", "Software Engineer", "Fullstack Developer", "BESYS Technologies", "MERN Stack", "Go", "Flutter", "Vue.js", "Next.js", "Cloud Computing", "Payment Integration", "Portfolio", "Web Developer", "Junior Developer"],
  authors: [{ name: "Biruhken Ayana", url: "https://www.linkedin.com/in/biruhken-ayana-210045298" }],
  creator: "Biruhken Ayana",
  publisher: "Biruhken Ayana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://biruhkenayana.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://biruhkenayana.com",
    title: "Biruhken Ayana | Software Engineer & Fullstack Developer",
    description: "Energetic Junior Software Engineer at BESYS Technologies. Passionate about cloud computing, payment integration, and building innovative solutions with MERN Stack, Go, Flutter & Vue.js.",
    siteName: "Biruhken Ayana Portfolio",
    images: [
      {
        url: "/myimages/primary.png",
        width: 1200,
        height: 630,
        alt: "Biruhken Ayana - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biruhken Ayana | Software Engineer & Fullstack Developer",
    description: "Junior Software Engineer at BESYS Technologies. Building innovative solutions with modern technologies.",
    images: ["/myimages/primary.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Biruhken Ayana",
    "url": "https://biruhkenayana.com",
    "image": "https://biruhkenayana.com/myimages/primary.png",
    "jobTitle": "Junior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "BESYS Technologies"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dire Dawa University"
    },
    "sameAs": [
      "https://www.linkedin.com/in/biruhken-ayana-210045298",
      "https://t.me/@Biruhye24"
    ],
    "knowsAbout": ["Software Engineering", "MERN Stack", "Go", "Flutter", "Vue.js", "Next.js", "Cloud Computing", "Payment Integration"]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
