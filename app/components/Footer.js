import datas from "../datas.json"
import styles from './components.module.css'

export default function Footer() {

    const listSocials = datas.map((data) => 
    <li key={data.id}>
        <a href={data.url} className={styles.links}>{data.name}</a>
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