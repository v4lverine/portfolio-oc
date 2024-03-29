"use client";
import Link from "next/link";
import styles from "../page.module.scss";
import Presentation from "../components/Presentation";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.document.title = "Contact | valverine - web developer";
    window.document.description =
      "Page de contact du portfolio de développeur web de Valverine. Vous souhaitez me contacter ? N'hésitez pas à m'écrire ici !";
  }, []);
  return (
    <main>
      <section className={styles.entireContactBlock}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            type: "keyframes",
          }}
          whileInView={{ opacity: 1 }}
          className={styles.contactTextBlock}
        >
          <Presentation label="Discutons ensemble de vos projets !">
            Si vous avez besoin de plus d&apos;informations sur mes différents
            services, vous pouvez me contacter via le formulaire ci-contre.{" "}
            <br />
            Bien évidemment, je vous répondrai dans les plus brefs délais !
          </Presentation>
          <Link href="/" className={styles.contactToHomeLink}>
            Retour sur la page d&apos;accueil
          </Link>
        </motion.div>
        <ContactForm />
      </section>
    </main>
  );
}
