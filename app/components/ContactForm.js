//en cours de fabrication
"use client";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  font-size: 1.5em;
`;

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Envoyer");
  return (
    <section>
      <form>
        <label htmlFor="name">Prénom/Nom</label>
        <input type="text" name="name" required />
        <label>E-mail</label>
        <input type="text" name="email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <Button>{formStatus}</Button>
      </form>
    </section>
  );
}
