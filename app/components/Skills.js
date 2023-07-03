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
    <article className={styles.skillsBlock}>
      <h2 id="skills">Mes différentes compétences</h2>
      <p className={styles.skillsText}>
        Au cours de ma formation <b className={styles.keyword}>Web Developer</b>{" "}
        chez
        <a
          href="https://openclassrooms.com"
          target="_blank"
          className={styles.linkSkillsText}
        >
          OpenClassrooms
        </a>
        , j'ai pu développer un grand nombre de compétences dans le domaine du
        développement web. <br />
        D'une note allant de 1 (en cours d'apprentissage) à 5 (compétence bien
        acquise), j'ai auto-évalué ces divers atouts dans cette liste
        ci-dessous.
      </p>
      <ul className={styles.listSkills}>{listSkills}</ul>
    </article>
  );
}
