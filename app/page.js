import Image from 'next/image'
import styles from './page.module.css'
// import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
      <p>Hello World !</p>
      </main>
      <Footer/>
    </div>
  )
}
