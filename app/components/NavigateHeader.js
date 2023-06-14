import styles from './components.module.scss' 

export default function NavigateHeader(){
    const navHeader = ['présentation', 'travaux', 'contact']

    const linksHeader = navHeader.map((link) =>
    <li key={link}>
        <a className={styles.selectList}>{link}</a>
    </li>)

    return(
        <ul className={`${styles.lists} ${styles.listHeader}`}>{linksHeader}</ul>
    )
}