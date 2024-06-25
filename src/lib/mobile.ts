import { Style, media } from 'typedcssx'
export const mobile = media('max-width: 799px')

export const displayNone = Style.set({
  ...mobile({
    display: 'none'
  })
})
