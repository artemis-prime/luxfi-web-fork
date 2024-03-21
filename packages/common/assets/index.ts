import path from 'path'

const SERVER = process.env.LUX_ASSET_SERVER_URL ?? '' 
const IMG_PATH = '/assets/img'
const DOCS_PATH = '/docs'
const CMMC = 'cmmc'
const METADATA = 'metadata'

const MD_ICONS = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    short: 'favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    short: 'favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    short: 'android-chrome-192x192.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    short: 'android-chrome-512x512.png'
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: "180x180",
    short: 'apple-touch-icon.png'
  },
]

export const imgUrl = (short: string): string => (
  path.join(SERVER, IMG_PATH, short)
)

export const getProductImgUrl = (categoryId: string, img: string) => {

  const pathFromSku = categoryId.split('-').map((el) => (el.toLowerCase())).join('/')
  return path.join(SERVER, IMG_PATH, CMMC, pathFromSku, img)
}

export const getMetadataImgUrl = (short: string): string => (
  path.join(SERVER, IMG_PATH, METADATA, short)
)

export const getMetadataIcons = () => (
  MD_ICONS.map((ic) => ({
    rel: ic.rel,
    type: ic.type,
    sizes: ic.sizes,
    url: getMetadataImgUrl(ic.short)
  }))
)

export const getDocUrl = (short: string): string => (
  path.join(SERVER, DOCS_PATH, short)
)