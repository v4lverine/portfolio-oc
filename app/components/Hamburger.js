import { slide as Menu } from "react-burger-menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./components.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.hamburger}>
      <Menu
        customBurgerIcon={
          <div className={styles.bars}>
            <FontAwesomeIcon icon={faBars} color="var(--greenish)" />
          </div>
        }
        width={"600px"}
        className={styles.hamburgerPosition}
        onOpen={isOpen}
        onClose={isOpen} // /!\
      >
        <Link href="/">Page d'accueil</Link>
        <Link href="/contact">Contact</Link>
      </Menu>
    </div>
  );
}
