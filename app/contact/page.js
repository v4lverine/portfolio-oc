import Link from "next/link";
import styles from "../page.module.css"

export default function Contact(){
    return (
        <div>
            <Link href='/' className={styles.contact}>Retour sur la page d'accueil</Link>
        </div>
    )
}