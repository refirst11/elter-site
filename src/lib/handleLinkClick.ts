import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const handleLinkClick = (router: AppRouterInstance, e: React.MouseEvent, slug: string, headingId: string) => {
  e.preventDefault()
  e.stopPropagation()

  setTimeout(() => {
    const element = document.getElementById(headingId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 76
      window.scrollTo({
        top: offsetTop
      })
    }
  }, 200)

  router.push(`/${slug}#${headingId}`)
}
