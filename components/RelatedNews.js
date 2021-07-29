import styles from '../styles/Home.module.css'
import newsStyles from '../styles/News.module.css'
import { PostList } from '../lib/posts'

export default function RelatedNews() {
  return (
    <section className={styles.container}>
        <div className={newsStyles.headingArea}>
          <h3 className={styles.description}>Related News</h3>
          <p>More News</p>
        </div>
        <section className={newsStyles.articleBoxContainer}>  
          <PostList />
        </section>
    </section>
  )
}