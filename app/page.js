import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
      <p>Contact</p>
      <Link href='/contact'>Suivre ce lien </Link>
      </main>
    </div>
  )
}
