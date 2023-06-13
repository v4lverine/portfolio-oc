// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import skills from "../datas/skills.json"
export default function Skills() {

    const listSkills = skills.map((skill) => 
    <li key={skill.id}>
        <h3>{skill.title}</h3>
        <p>{skill.rate}/5</p>
    </li>)

    return ( 
    <article>
        <h2>Mes différentes compétences dans le domaine du développement web</h2>
            <ul>{listSkills}</ul>
    </article>)
} 