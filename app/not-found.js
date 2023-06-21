"use client";

import Link from "next/link";

//404 homepage
export default function NotFound() {
  return (
    <main>
      <h2>Une erreur est survenue !</h2>
      <Link href="/">Retourner à la page d'accueil</Link>
    </main>
  );
}
