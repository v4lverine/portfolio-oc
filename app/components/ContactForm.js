//en cours de fabrication
"use client";
import { useState } from "react";
import styled from "styled-components";
import styles from "./components.module.scss";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  font-size: 1em;
  //   :active {
  //     background-color: #000;
  //   }
`;

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Envoyer");
  return (
    <section className={styles.sectionForm}>
      <form className={styles.contactForm} action="#">
        <label htmlFor="name" className={styles.placeholder}>
          Prénom/Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Prénom / Nom"
          required
        />
        <label htmlFor="email" className={styles.placeholder}>
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Adresse e-mail"
          required
        />
        <label htmlFor="message" className={styles.placeholder}>
          Message
        </label>
        <textarea
          name="message"
          minLength={100}
          maxLength={2000}
          placeholder="Message"
          required
        ></textarea>
        <Button>{formStatus}</Button>
      </form>
    </section>
  );
}
