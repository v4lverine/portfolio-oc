import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Raleway, Delius_Unicase } from "next/font/google";
import "./globals.scss";
import Background from "./components/Background";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});

const delius = Delius_Unicase({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
});

export const metadata = {
  //website SEO metadata
  title: "valverine - web developer",
  description:
    "Le portfolio de valverine aka Valentine, web developer full-stack / ancienne journaliste. Besoin de mes services ? Contactez-moi !",
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  twitter: {
    card: "summary_large_image",
    title: "valverine - web developer",
    url: "https://valverine-portfolio.vercel.app/",
    description:
      "Bienvenue sur le portfolio de valverine. Web developer full-stack",
    creator: "@valverine_",
    images: ["https://valverine-portfolio.vercel.app/images/icon.jpg"],
  },
  openGraph: {
    title: "valverine - web developer",
    description:
      "Bienvenue sur le portfolio de valverine. Web developer full-stack",
    url: "https://valverine-portfolio.vercel.app/",
    siteName: "valverine - web developer",
    images: "https://valverine-portfolio.vercel.app/images/icon.jpg",
  },
  locale: "fr_FR",
  type: "website",
};

//page structure, children = according to route, homepage = '/'
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={raleway.className}>
      <body className={delius.variable} style={{ position: "relative" }}>
        <Header />
        <Background
          src="/images/aibg.png"
          alt="Image en arrière-plan représentant un paysage mêlant savane et jungle."
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
