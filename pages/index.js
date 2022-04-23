import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { birds } from '../db/birds.js'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { formatName } from '../utils/Format'

export default function Home() {
  return (
      <>
      <Head>
        <title>Pigeons | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.cards}>
      { birds.map(bird => (
        <article className={styles.card} key={ bird.id }>
        <h2>{ bird.name }</h2>
        <Link href={`/${bird.id}`} scroll={false}>
          <div className={styles.cardimg}>
            {/* <Image src={`/images/${formatName(bird.name)}/logo.jpg`} layout='fill' objectFit='cover' /> */}
            <img className={styles.img} decoding="async" loading="lazy" src={`/images/${formatName(bird.name)}/logo.jpg`} height="240px" />
          </div>
        </Link>
        </article>
      ))}
    </main>
    </>
  )
}
