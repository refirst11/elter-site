import cssx, { max_md, max_lg } from 'typedcssx'
import { md768_1414 } from 'lib/media'

export const cssMain = cssx.set({
  [md768_1414]: {
    maxWidth: 'calc(100% - 240px)',
    left: 120,
    paddingRight: 280
  },
  ['@media (max-width: 1124px)']: {
    maxWidth: '100%',
    left: 240
  },
  [max_md]: {
    left: 0
  }
})
