"use client";
import { useState } from "react";
import styled from "styled-components";
import styles from "./components.module.scss";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import Loader from "./Loader";

const Button = styled.button`
  // background: transparent;
  border-radius: 50px;
  border: 2px solid var(--greenish);
  font-size: 1em;
  cursor: pointer;
  // width: 50%;
  // padding-block: 10px;
  // margin-inline: 25%;
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

  const [isLoading, setIsLoading] = useState(false); //loader state
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    return name.length && email.length && message.length >= 100;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page refreshing
    let data = {
      name,
      email,
      message,
    };
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Votre message a bien été envoyé ! Merci ! 👍");
          setSubmit("true");
          setMessage("");
          setEmail("");
          setName("");
          setIsLoading(false);
        } else {
          console.log(`Le server a retourné un code ${res.status}`);
          alert("Message envoyé !");
        }
      })
      .catch((error) => {
        setErrorMessage("Unable to send message");
        setIsLoading(false);
        alert("La requête n'a pas pu aboutir");
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
          disabled={!validate() || isLoading}
        >
          {isLoading ? (
            <Loader style={{ color: "var(--greenish)" }} />
          ) : (
            "Envoyer"
          )}
        </Button>
      </motion.form>
    </section>
  );
}
