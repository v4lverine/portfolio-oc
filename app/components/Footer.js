import socials from "../datas/socials.json";
import styles from "./components.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const listSocials = socials.map((social) => {
    let icon = null;

    if (social.name === "Twitter") {
      icon = faTwitter;
    }
    if (social.name === "LinkedIn") {
      icon = faLinkedin;
    }
    if (social.name === "Twitch") {
      icon = faTwitch;
    }
    return (
      <li key={social.id}>
        <a href={social.url} className={styles.navFooterLinks}>
          <FontAwesomeIcon icon={icon} className={styles.brands} />
          {social.name}
        </a>
      </li>
    );
  });

  return (
    <footer className={styles.footer}>
      <h2>Retrouvez-moi sur les réseaux !</h2>
      <nav>
        <ul className={`${styles.lists} ${styles.socialsNav}`}>
          {listSocials}
        </ul>
      </nav>
    </footer>
  );
}
