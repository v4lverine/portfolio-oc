import Link from "next/link";
import styles from "../page.module.scss";
import Presentation from "../components/Presentation";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main>
      <section className={styles.entireContactBlock}>
        <div className={styles.contactTextBlock}>
          <Presentation label="Des questions ? Des remarques ? Des compliments à me faire ?">
            Si vous avez besoin de plus d'informations sur mes différents
            services, <br />
            vous pouvez me contacter via le formulaire ci-contre. <br />
            Bien évidemment, je vous répondrai dans les plus brefs délais !
          </Presentation>
          <Link href="/" className={styles.contactToHomeLink}>
            Retour sur la page d'accueil
          </Link>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
