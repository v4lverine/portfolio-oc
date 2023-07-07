import { slide as Menu } from "react-burger-menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./components.module.scss";
import "./burger.scss";
import { useState } from "react";

export default function Hamburger() {
  const styleLinks = {
    textDecoration: "none",
    color: "var(--beigish)",
    marginBottom: "50px",
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.hamburger}>
      <Menu
        right
        onStateChange={setIsOpen}
        customBurgerIcon={
          <span className={styles.bars}>
            <FontAwesomeIcon icon={faBars} color="var(--greenish)" />
          </span>
        }
        width={"400px"}
      >
        <nav
          style={{
            display: "grid",
          }}
        >
          <a href="/" style={styleLinks}>
            Page d&apos;accueil
          </a>
          <a href="/contact" style={styleLinks}>
            Contact
          </a>
        </nav>
      </Menu>
    </div>
  );
}
