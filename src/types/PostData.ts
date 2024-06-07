import { ReactElement, JSXElementConstructor } from 'react'

export type ReturnData = {
  meta: {
    title: string
    subtitle: string
    date: string
  }
  content: ReactElement<string, string | JSXElementConstructor<string>>
}

export type PostData = {
  title: string
  subtitle: string
  date: string
  content: ReactElement<string, string | JSXElementConstructor<string>>
}
