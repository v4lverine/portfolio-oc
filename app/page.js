import Link from 'next/link'
import styles from './page.module.css'
import Image from './components/Image'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Works from './components/Works'
import Hobbies from './components/Hobbies'

export default function Home() {
  return (
 
    <main className={styles.main}>
        <section className={styles.section}>
          <Image />  
          <p>Contact</p>
          <Link href='/contact' className={styles.links}>Besoin d'informations ? Contactez-moi</Link>
        </section>
        <Presentation label='Qui suis-je ?'>
          Vous avez vu de la lumière et vous êtes entrés ? Bien. <br/>
          Bonjour et bienvenue sur le site de valverine a.k.a. Valentine. <br/>
          Après une épopée dans le journalisme, je me lance dans le développement web. <br/>
          Ce site vous permet d'avoir un aperçu des différents travaux que j'ai pu faire tout au long de ma carrière. <br/>
        </Presentation>
        <Skills />
        <Works />
        <Hobbies />
    </main>
  )
}
