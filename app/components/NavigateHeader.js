import { useState } from "react";
import styles from "./components.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigateHeader() {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen);
  // };

  const navHeader = [
    {
      name: "présentation",
      path: "/#presentation",
    },
    {
      name: "skills",
      path: "/#skills",
    },
    {
      name: "travaux",
      path: "/#works",
    },
    { name: "contact", path: "/contact" },
  ];

  const linksHeader = navHeader.map((link, index) => (
    <li key={index}>
      <a className={styles.selectList} href={link.path}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <nav className={styles.showNav}>
      <ul className={`${styles.lists} ${styles.listHeader}`}>{linksHeader}</ul>

      {/* <button className={styles.hamburger} onClick={toggleHamburger}>
        <FontAwesomeIcon icon={faBars} />
      </button> */}
    </nav>
  );
}
