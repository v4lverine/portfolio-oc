import styles from '../page.module.css' 

export default function Banner(){
    return(
        <header>
            <h1 className={styles.h1}>valverine - Développeuse web</h1>
            <nav>
                <ul className={styles.lists}>
                    <li>présentation</li>
                    <li>travaux</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}