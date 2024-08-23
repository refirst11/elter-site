export interface NpmPackage {
  name: string
  'dist-tags': {
    latest: string
  }
  versions: {
    [key: string]: any
  }
}
