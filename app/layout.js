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
  //métadonnées du site, pour SEO
  title: "valverine - web developer",
  description:
    "Le portfolio de valverine aka Valentine, web developer full-stack / ancienne journaliste. Besoin de mes services ? Contactez-moi !",
  category: "technology",
  twitter: {
    card: "summary_large_image",
    title: "valverine - web developer",
    // url:'https://valverine.fr',
    description:
      "Bienvenue sur le portfolio de valverine. Web developer full-stack",
    creator: "@valverine_",
    // images: [''],
  },
  openGraph: {
    title: "valverine - web developer",
    description:
      "Bienvenue sur le portfolio de valverine. Web developer full-stack",
    // url: 'https://valverine.fr',
    // siteName: 'valverine - web developer',
    // images:,
  },
  locale: "fr_FR",
  type: "website",
};

//structure de la page, children = charge page selon la route, page de app = '/'
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={raleway.className}>
      <body className={delius.variable}>
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
