import type { Metadata } from 'next'

import { getMetadataIcons } from '@luxdefi/common/assets'

export default {
  metadataBase: new URL('https://lux.finance'),
  title: {
    default: 'Lux Finance',
    template: '%s | Lux Finance',
  },
  description: 'Lux Finance is the only private and quantum safe DeFi interface',
  applicationName: 'Lux Finance',
  authors: {name: 'Lux Partners Limited'},
  keywords: "Lux Network, Blockchain Bridge, Multi-Chain, EVM, Solana, Bitcoin, Cross-Chain, Interoperability, Cryptocurrency, Blockchain Technology",
  icons: getMetadataIcons(),

  //manifest: '/site.webmanifest',
  /*
  openGraph: {
    title: 'Lux Bridge Explorer - Explore your swaps',
    description: "Connect across EVM, Solana, Bitcoin, and other blockchains with Lux Network's advanced bridge technology. Experience secure and efficient cross-chain functionality.",
    images: 'https://explorer.bridge.lux.network/assets/img/opengraph-lux.jpg',
    type: 'website',
    url: "https://explorer.bridge.lux.network",

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Bridge Explorer - Explore your swaps',
    description: "Experience seamless multi-chain connectivity with Lux Network's Blockchain Bridge. EVM, Solana, Bitcoin, and more, united.",
    images: 'https://explorer.bridge.lux.network/assets/img/opengraph-lux.jpg',
    site: '@luxdefi'
  },
  */
  formatDetection: { telephone: false },
  other: {
    'msapplication-TileColor': '#000000'
  },
} as Metadata
