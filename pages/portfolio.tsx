import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import { Inter } from '@next/font/google'
import {Footer} from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | nrrdy.my.id</title>
                <meta name="description" content="socialink" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <Footer/>
            </main>
        </>
    )
}