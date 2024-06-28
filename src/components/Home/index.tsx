'use client'
import Link from 'next/link'
import { styles } from './style.css'

export function Home() {
  return (
    <main className={styles.top_wrapper}>
      <div className={styles.container}>
        <span className={styles.Logo}>Typed CSS X</span>
        <Link className={styles.link1} href="/docs">
          Get Started
        </Link>
        <Link className={styles.link2} href="/installation">
          Installation
        </Link>
        <p className={styles.text}>CSS in JS</p>
        <p className={styles.tagline}>A Type Safety and seamless CSS in JS on Next.js</p>
        <section className={styles.card_container}>
          <div>
            <span>🔭</span>
            <h2>Directly Scoped</h2>
            <p>Hash based class names provide unique scoping, CSS in tsx enables seamless design with React components.</p>
          </div>

          <div>
            <span>🌠</span>
            <h2>Zero Runtime</h2>
            <p>Experience efficiency with zero runtime overhead, boosting performance and streamlining your workflow.</p>
          </div>
          <div>
            <span>⚙️</span>
            <h2>Autocomplete</h2>
            <p>Enjoy seamless coding with advanced autocomplete, speeding up development and improving accuracy. </p>
          </div>
          <div>
            <span>🌌</span>
            <h2>Support RSC</h2>
            <p>Take advantage of full React Server Components (RSC) support in Next.js, optimizing for the latest React 18 features.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
