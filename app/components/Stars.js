import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import styles from './components.module.scss'

export default function Stars({ rating }){
    const numberLeaves = [ 1, 2, 3, 4, 5 ];
    
    return(
        <aside className={styles.leafBlock}>
            {numberLeaves.map((stars) =>
            rating >= stars ? <FontAwesomeIcon key={stars.toString()} icon={faLeaf} style={{ color: "rgb(86, 214, 105)" }} className={styles.leaves} />
            : <FontAwesomeIcon key={stars.toString()} icon={faLeaf} style={{ color: "var(--greyish)" }} className={styles.leaves} />)}
        </aside>
    )

}