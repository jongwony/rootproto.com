import type { Metadata } from "next";
import { Geist, Geist_Mono, Bruno_Ace_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brunoAceSC = Bruno_Ace_SC({
  weight: "400",
  variable: "--font-bruno-ace-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rootproto — AI 협업의 근본원리를 도구로 만듭니다",
  description:
    "루트프로토는 AI 협업의 근본원리를 연구하고, 이를 실용적인 도구로 구현합니다. Building fundamental tools for AI collaboration.",
  keywords: [
    "Rootproto",
    "루트프로토",
    "AI collaboration",
    "AI 협업",
    "developer tools",
  ],
  authors: [{ name: "Jongwon Choi", url: "https://jongwony.com" }],
  openGraph: {
    title: "Rootproto",
    description: "AI 협업의 근본원리를 도구로 만듭니다",
    url: "https://rootproto.com",
    siteName: "Rootproto",
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rootproto",
    description: "Building fundamental tools for AI collaboration",
  },
  alternates: {
    canonical: "https://rootproto.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rootproto",
              alternateName: "루트프로토",
              url: "https://rootproto.com",
              description:
                "AI 협업의 근본원리를 도구로 만듭니다",
              founder: {
                "@type": "Person",
                name: "Jongwon Choi",
                alternateName: "최종원",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAceSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
