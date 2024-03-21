import { ReceiptPoundSterling, TurtleIcon } from 'lucide-react'
import path from 'path'

const SERVER = process.env.LUX_ASSET_SERVER_URL ?? '' 
const IMG_PATH = '/assets/img'
const CMMC = 'cmmc'

export const imgUrl = (short: string): string => (
  path.join(SERVER, IMG_PATH, short)
)

export const getProductImgUrl = (categoryId: string, img: string) => {

  const pathFromSku = categoryId.split('-').map((el) => (el.toLowerCase())).join('/')
  return path.join(SERVER, IMG_PATH, CMMC, pathFromSku, img)
}

