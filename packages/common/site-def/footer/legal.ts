import type { LinkDef } from '@hanzo/ui/types'

import { getDocUrl } from '../../assets'

const legal: LinkDef[] = [
  {
    title: 'Terms and Conditions',
    href: getDocUrl('legal/LUX-NFT-Terms-and-Conditions.pdf'),
    newTab: true,
  },
  {
    title: 'Privacy Policy',
    href: getDocUrl('legal/LUX-Privacy-Policy.pdf'),
    newTab: true,
  },
] 

const title: LinkDef = 
{
  title: 'Legal',
  href: '',
  variant: 'linkFG',
}

const legalColumn: LinkDef[] =  [title, ...legal]

export {
  legal,
  legalColumn
}
