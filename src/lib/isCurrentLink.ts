const isCurrentLink = (href: string, currentPath: string) => {
  if (href === '/') {
    return href === currentPath
  }

  return currentPath !== '/'
}

export default isCurrentLink
