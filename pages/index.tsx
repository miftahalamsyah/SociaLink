import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Topbar } from '../components/Topbar'
import { Bio } from '../components/Bio'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>@miftah.rzky | nrrdy.my.id</title>
        <meta name="description" content="socialink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
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
