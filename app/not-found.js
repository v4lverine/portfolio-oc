"use client";
import styled from "styled-components";
import Link from "next/link";

const ErrorPage = styled.section`
  background: var(--beigish);
  margin: 15% 5%;
  padding: 5%;
  border-radius: 25px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0;
    text-align: center;
    font-size: 4em;
  }
  @media (max-width: 767px) {
    font-size: 0.6em;
    margin: 5% 3%;
    height: 400px;
    h2 {
      font-size: 3.2em;
    }
  }
  @media (max-width: 1023px) {
    font-size: 0.8em;
  }
`;
//404 homepage
export default function NotFound() {
  return (
    <main>
      <ErrorPage>
        <h2>Une erreur est survenue !</h2>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "2em",
            color: "var(--greyish)",
            display: "block",
            margin: "auto",
            width: "fit-content",
            textAlign: "center",
            border: "2px solid var(--greyish)",
            padding: "20px",
          }}
        >
          Retourner à la page d&apos;accueil
        </Link>
      </ErrorPage>
    </main>
  );
}
