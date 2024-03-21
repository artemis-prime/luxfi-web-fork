import type { Metadata } from "next";

import { getMetadataIcons } from '@luxdefi/common/assets'

export default {
  metadataBase: new URL("https://lux.partners"),
  title: {
    default: "Lux Partners",
    template: "%s | Lux Partners",
  },
  description: "Pioneer the future of finance with Lux Partners",
  applicationName: "Lux Partners",
  authors: { name: "Lux Partners Limited" },
  keywords:
    "Lux, Lux Partners, Lux DeFi, Lux Network, DeFi, Web3, Privacy, Quantum Security, Blockchain, Bridge, Multi-Chain, Ethereum, EVM, Solana, Bitcoin, Cross-Chain, Interoperability, Cryptocurrency, Blockchain Technology",
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
    "msapplication-TileColor": "#000000",
  },
  asCurrent: "foo",
} as Metadata & { asCurrent: string };
