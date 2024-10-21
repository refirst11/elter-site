import { css } from './style'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={css.footer_main}>
      <div className={css.footer_container}>
        <span className={css.license}>MIT 2024 © typedcsslab.</span>
        <Image className={css.nextlogo} src="/next.svg" alt="Next.js Logo" width={80} height={20} />
      </div>
    </footer>
  )
}
