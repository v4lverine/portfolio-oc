//code global = à mettre dans un app.js ou laisser tel quel ?

import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Background from "./components/Background";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  //métadonnées du site, pour SEO
  title: "valverine - web developer",
  description:
    "Le portfolio de valverine aka Valentine B. Web developer full-stack / ancienne journaliste. Besoin de mes services ? Contactez-moi !",
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
      <body>
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
