import Style, { max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'

export const styles = Style.create({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    width: '100%',
    borderBottom: 'solid 1px var(--color-border)',
    background: 'var(--color-bg)'
  },

  wrapper: {
    zIndex: '2',
    position: 'relative', // デフォルトはrelative
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '-40px',
    left: '380px',
    height: '0',
    listStyleType: 'none',
    listStylePosition: 'inside',
    [md768_1414]: {
      display: 'flex',
      position: 'absolute', // absoluteに変更
      right: '240px', // 右からの距離を設定（任意の距離に調整可能）
      left: 'auto',
      top: '20px' // トップとの高さを保つ
    },
    ['@media (max-width: 964px)']: {
      display: 'none'
    }
  },

  logo: {
    position: 'absolute',
    color: 'var(--color-heading)',
    fontWeight: 400,
    left: '50%',
    transform: 'translate(-410%)',
    top: 14,
    padding: '4px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    [max_md]: {
      display: 'none'
    },
    [md768_1414]: {
      left: '48px',
      transform: 'translate(0%)'
    },
    outline: '3px solid transparent',
    hover: {
      transition: 'all 0.2s',
      outline: '3px solid skyblue'
    }
  },

  ontline: {
    transition: 'all 0.4s',
    outline: '3px solid skyblue'
  },

  version: {
    fontWeight: 400,
    fontSize: 12.4
  },

  link: {
    fontSize: '14px',
    textDecoration: 'none',
    width: 'fit-content',
    height: '26px',
    [max_md]: {
      display: 'none'
    }
  },
  active: {
    "&[aria-current='page']": {
      color: 'var(--color-heading)',
      fontWeight: '550'
    },
    "&[aria-current='false']": {
      color: 'var(--color-heading)',
      fontWeight: '300'
    }
  }
})
