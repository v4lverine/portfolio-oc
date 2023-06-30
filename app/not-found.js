"use client";
import styled from "styled-components";
import Link from "next/link";

const ErrorPage = styled.section`
  background: var(--beigish);
  margin: 5% 20%;
  padding: 5%;
  border-radius: 25px;
  width: 800px;
  height: 300px;
  h2 {
    margin: 0;
    text-align: center;
    font-size: 4em;
  }
`;
//404 homepage
export default function NotFound() {
  return (
    <main>
      <ErrorPage>
        <h2>Une erreur est survenue !</h2>
        <hr style={{ marginBlock: "35px" }} />
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "2em",
            color: "var(--greyish)",
            textAlign: "center",
            marginLeft: "22%",
          }}
        >
          Retourner à la page d&apos;accueil
        </Link>
      </ErrorPage>
    </main>
  );
}
