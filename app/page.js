import Link from "next/link";
import styles from "./page.module.scss";
import LargeImage from "./components/LargeImage";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Works from "./components/Works";
// import Hobbies from './components/Hobbies'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.secPres}>
        <Presentation label="Qui suis-je ?">
          <div className={styles.presBlock} id="presentation">
            <LargeImage
              src="/images/profile.jpg"
              alt="Photo de profil de valverine"
            />
            <p>
              Bonjour je m&apos;appelle Valentine aka{" "}
              <span className={styles.underline}>valverine</span>, web developer
              en front-end / SEO.
            </p>
          </div>
        </Presentation>
      </section>
      <Skills />
      <Works />
      {/* <Hobbies /> */}
      <section className={styles.wholeContactBlock}>
        <Presentation label="Comment me contacter ?">
          <div className={styles.contactBlock}>
            <p>
              Vous souhaitez me contacter ? Me poser des questions sur un point
              en particulier ? Ou me complimenter pour mes travaux ? <br />
              Vous pouvez m&apos;écrire en cliquant juste
              <Link
                href="/contact"
                className={`${styles.links} ${styles.underline}`}
              >
                {" "}
                ici{" "}
              </Link>
              ! <br />
              Temps de réponse estimé :{" "}
              {/*mettre un genre de temps de chargement*/} ...
            </p>
          </div>
        </Presentation>
      </section>
    </main>
  );
}
