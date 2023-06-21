// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import skills from "../datas/skills.json";
import styles from "./components.module.scss";
import Stars from "./Stars";

export default function Skills() {
  const listSkills = skills.map((skill) => (
    <li key={skill.id} className={styles.oneSkill}>
      <h3>{skill.title}</h3>
      <Stars rating={skill.rate} />
    </li>
  ));

  return (
    <article>
      <h2 id="skillsBlock">
        Mes différentes compétences dans le domaine du développement web
      </h2>
      <ul className={styles.listSkills}>{listSkills}</ul>
    </article>
  );
}
