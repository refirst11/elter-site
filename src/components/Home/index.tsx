'use client'
import { styles } from './style.css'

export function Home() {
  return (
    <div className={styles.container}>
      <span className={styles.Logo}>Typed CSS X</span>
      <p className={styles.text}>CSS in JS</p>
      <div>
        <span>📡</span>
        <h2>Console lover</h2>
        <p>Compiled CSS code is directly output to the console, ensuring you never write incorrect code during development.</p>
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
        <h2>Support RSC</h2>
        <p>Take advantage of full React Server Components (RSC) support in Next.js, optimizing for the latest React 18 features.</p>
      </div>
    </div>
  )
}
