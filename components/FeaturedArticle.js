import faStyles from '../styles/FeaturedArticle.module.css'
import Image from 'next/image'
import FeaturedArticlePlaceholder from '../public/featured_placeholder.jpg'

export default function FeaturedArticle() {
    return (
        <section className={faStyles.fa_container}>
            <article className={faStyles.intro_container}>
                <button className={faStyles.comp_button}>A-League</button>
                <button className={faStyles.category_button}>News Article</button>
                <h2>What to expect from this upcoming matchup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.</p>
            </article>
            <div>
                <button className={faStyles.arrow}>&#9654;</button>      
                <Image src={FeaturedArticlePlaceholder} height={200} width={300} alt='Featured Article Placeholder' />
            </div> 
        </section>
    )
}