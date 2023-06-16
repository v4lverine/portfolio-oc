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
        <a href={social.url} className={styles.links}>
          <FontAwesomeIcon icon={icon} className={styles.toto} />
          {social.name}
        </a>
      </li>
    );
  });

  return (
    <footer>
      <h2>Retrouvez-moi sur les réseaux !</h2>
      <nav>
        <ul className={styles.lists}>{listSocials}</ul>
      </nav>
    </footer>
  );
}
