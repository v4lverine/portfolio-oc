import datas from "../datas.json"
import styles from './components.module.css'

export default function Footer() {

    const listSocials = datas.map((social) => 
    <li key={social.id}>
        <a href={social.url} className={styles.links}>{social.name}</a>
    </li>
    )

    return(
        <footer>
            <h4>Retrouvez-moi sur les réseaux !</h4>
            <nav>
                <ul className={styles.lists}>{listSocials}</ul>
            </nav>
        </footer>
    )
}