import Link from 'next/link'
import { styles } from './style'
import Animation from 'components/Firemotion/Animation'
import { union } from 'elter'
import Image from 'next/image'

export function Home() {
  return (
    <Animation>
      <div className={styles.top_wrapper}>
        <div className={styles.container}>
          <span className={styles.logo}>
            <Image className={styles.left_logo} src="/logo.png" alt={'Main_Logo'} width={100} height={100} />
            elter
          </span>
          <span className={styles.desp}>CSS-in-JS for stably building user interfaces</span>
          <p className={styles.text}>Write CSS in TypeScript</p>
          <p className={styles.tagline}>A Type safe and stably CSS in Framework</p>
          <section className={styles.link_wrapper}>
            <Link className={union(styles.link, styles.link_color1)} href="/introduction">
              Introduction
            </Link>
            <Link className={union(styles.link, styles.link_color2)} href="/installation">
              Installation
            </Link>
          </section>
          <section className={styles.card_container}>
            <div>
              <span>🔦</span>
              <h2>Ease API</h2>
              <p>Transition smoothly to elter with its intuitive API and familiar CSS-like syntax, reducing the learning curve for your team.</p>
            </div>

            <div>
              <span>🌠</span>
              <h2>Zero Runtime</h2>
              <p>Experience efficiency with zero runtime overhead, boosting performance and streamlining your workflow.</p>
            </div>
            <div>
              <span>🔭</span>
              <h2>Autocomplete</h2>
              <p>Enjoy seamless coding with advanced autocomplete, speeding up development and improving accuracy. </p>
            </div>
            <div>
              <span>🌌</span>
              <h2>Support App Router</h2>
              <p>Take full advantage of the App Router in Next.js to make the most of the latest features in React 18.</p>
            </div>
          </section>
        </div>
      </div>
    </Animation>
  )
}
