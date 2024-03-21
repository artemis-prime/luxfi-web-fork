import type { Product } from '@hanzo/commerce/types'
import { getProductImgUrl } from '@luxdefi/common/assets'

import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  title: 'Lux Elite Card',
  img: getProductImgUrl('LXM-CR-E', 'cards-pair-gd-sl-1485x1114.png'),
  run: 100000,
  fees: {
    initial: 1000,
    annual: 1000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-E-24G',
      sku: 'LXM-CR-E-24G',
      categoryId: 'LXM-CR-E',
      title: 'Lux Elite Card, 24k Gold',
      titleAsOption: '24k Gold',
      price: 500,
      img: getProductImgUrl('LXM-CR-E', 'gd-ls-700x442.png'),
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      categoryId: 'LXM-CR-E',
      title: 'Lux Elite Card, Sterling Silver',
      titleAsOption: 'Sterling Silver',
      price: 500,
      img: getProductImgUrl('LXM-CR-E', 'sl-ls-700x441.png'),
    } satisfies Product,
  ]
} satisfies CardCategory 

