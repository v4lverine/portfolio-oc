import Link from 'next/link'
import styles from './page.module.scss'
import LargeImage from './components/LargeImage'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Works from './components/Works'
import Hobbies from './components/Hobbies'

export default function Home() {
  return (
    <main className={styles.main}>
        <Presentation label='Qui suis-je ?'>
          <div className={styles.presBlock}>
            <LargeImage src='/images/profile.jpg' alt='Photo de profil de valverine'/>
            <p>Bonjour je m'appelle Valentine aka <span className={styles.underline}>valverine</span>, 
            développeuse web front-end / SEO.</p>
          </div>
        </Presentation>
        <Skills />
        <Works />
        {/* <Hobbies /> */}
        <Presentation label='Contact'>
          <Link href='/contact' className={styles.links}>Besoin d'informations ? Contactez-moi</Link>
        </Presentation>
    </main>
  )
}
