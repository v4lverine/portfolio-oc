//en cours de fabrication
"use client";
import { useState } from "react";
import styled from "styled-components";
import styles from "./components.module.scss";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page refreshing
    console.log("Envoyer");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Réponse reçue ! 👻");
        if (res.status === 200) {
          alert("Votre message a bien été envoyé ! Merci ! 👍");
          console.log("Réponse réussie ! ✅");
          setSubmit("true");
          setMessage("");
          setEmail("");
          setName("");
        }
      })
      .catch((error) => {
        console.log("Une erreur est survenue ❌");
      });
  };
  return (
    <section className={styles.sectionForm}>
      <motion.form
        initial={{ opacity: 0, x: 200 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.5,
          type: "keyframes",
        }}
        whileInView={{ opacity: 1 }}
        className={styles.contactForm}
        action="#"
      >
        <label htmlFor="name" style={{ visibility: "hidden" }}>
          Prénom/Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Prénom / Nom"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email" style={{ visibility: "hidden" }}>
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Adresse e-mail"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="message" style={{ visibility: "hidden" }}>
          Message
        </label>
        <textarea
          name="message"
          minLength={100}
          maxLength={2000}
          id="message"
          value={message}
          placeholder="Message (100 caractères minimum)"
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }} //for changes inside form to capture input changes
        ></textarea>
        <Button
          className={raleway.className}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Envoyer
        </Button>
      </motion.form>
    </section>
  );
}
