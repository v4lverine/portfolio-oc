import Link from 'next/link'
import styles from './page.module.css'
import Image from './components/Image'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
      <section>
        <Image />  
        <p>Contact</p>
        <Link href='/contact' className={styles.links}>Besoin d'informations ? Contactez-moi</Link>
      </section>
      </main>
    </div>
  )
}
