// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import skills from "../datas/skills.json"
import styles from "./components.module.scss"

export default function Skills() {

    const listSkills = skills.map((skill) => 
    <li key={skill.id} className={styles.oneSkill}>
        <h3>{skill.title}</h3>
        <p>{skill.rate}/5</p>
    </li>)

    return ( 
    <article>
        <h2>Mes différentes compétences dans le domaine du développement web</h2>
            <ul className={styles.listSkills}>{listSkills}</ul>
    </article>)
} 