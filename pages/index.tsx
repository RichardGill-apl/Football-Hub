import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PostList } from '../lib/posts'

export default function Home() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>APL Football Hub</title>
        <meta name="description" content="Football Hub front end application POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Football Hub Front End
        </h1>

        <p className={styles.description}>
          Latest APL Articles
        </p>

        <PostList />

      </main>

      <footer className={styles.footer}>
          &copy; APL 2021
      </footer>
    </div>
  )
}
