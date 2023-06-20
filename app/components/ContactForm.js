//en cours de fabrication
"use client";
import { useState } from "react";
import styled from "styled-components";
import styles from "./components.module.scss";
import { Raleway } from "next/font/google";

const Button = styled.button`
  // background: transparent;
  border-radius: 50px;
  border: 2px solid var(--greenish);
  font-size: 1em;
  cursor: pointer;
  width: 40%;
  padding-block: 10px;
  margin-inline: 25%;
  font-size: 0.8em;
`;
const raleway = Raleway({
  subsets: ["latin"],
});

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Envoyer");
  return (
    <section className={styles.sectionForm}>
      <form className={styles.contactForm} action="#">
        <label htmlFor="name" style={{ visibility: "hidden" }}>
          Prénom/Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Prénom / Nom"
          required
        />
        <label htmlFor="email" style={{ visibility: "hidden" }}>
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Adresse e-mail"
          required
        />
        <label htmlFor="message" style={{ visibility: "hidden" }}>
          Message
        </label>
        <textarea
          name="message"
          minLength={100}
          maxLength={2000}
          placeholder="Message"
          required
        ></textarea>
        <Button className={raleway.className}>{formStatus}</Button>
      </form>
    </section>
  );
}
