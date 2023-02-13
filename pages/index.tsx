import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Topbar } from '../components/Topbar'
import { Bio } from '../components/Bio'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>@miftah.rzky | SociaLink</title>
        <meta name="description" content="socialink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <section className="topbar">
              <Topbar />
          </section>

          <section className="bio">
              <Bio />
          </section>

          <section className="links">
              <Links />
          </section>

          <Footer/>
      </main>
    </>
  )
}
