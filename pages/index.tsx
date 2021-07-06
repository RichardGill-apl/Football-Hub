import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { gql, useQuery } from "@apollo/client";

export default function Home() {

  function PostList() {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log("ERROR:", error);
      return <p>There was an error fetching articles, please try again.</p>;
    }

    return data.posts.nodes.map(({ id, title, date }: {id:number, title:string, date:string}) => (
      <div key={id}>
        <p>
           <a href="#">{date} - <strong>{title}</strong></a>
        </p>
      </div>
    ));
  }

  const GET_POSTS = gql`
    query GetPosts {
      posts {
        nodes {
          id
          title
          date
          content
        }
      }
    }
  `;

  return (
    <div className={styles.container}>
      <Head>
        <title>APL Football Hub</title>
        <meta name="description" content="Football Hub front end application POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Football Hub Front End POC
        </h1>

        <p className={styles.description}>
          The following blog articles are being pulled from the Wordpress CMS.
        </p>

        <PostList />

      </main>

      <footer className={styles.footer}>
          &copy; APL 2021
      </footer>
    </div>
  )
}
