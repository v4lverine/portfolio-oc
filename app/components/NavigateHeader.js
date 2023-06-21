import styles from "./components.module.scss";

export default function NavigateHeader() {
  const navHeader = [
    {
      name: "présentation",
      path: "/#presBlock",
    },
    {
      name: "skills",
      path: "/#skillsBlock",
    },
    {
      name: "travaux",
      path: "/#worksBlock",
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
    <ul className={`${styles.lists} ${styles.listHeader}`}>{linksHeader}</ul>
  );
}
