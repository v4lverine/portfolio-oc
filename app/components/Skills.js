import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-regular-svg-icons'
import styles from './components.module.css'

export default function Skills() {
    return ( 
    <article>
        <p>Mes différentes compétences dans le domaine du développement web</p>
        <p>HTML <FontAwesomeIcon icon={faStar} className={styles.stars} /></p>   
    </article>)
} 