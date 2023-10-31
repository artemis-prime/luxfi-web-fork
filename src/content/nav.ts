import type { LinkItemDef } from './types'

const nav = [
  {
    title: "Credit",
    href: "https://lux.credit",
    external: true,
    newTab: false,
  },
  {
    title: "Finance",
    href: "https://lux.finance",
    external: true,
    newTab: false,
  },
  {
    title: "Market",
    href: '/',
    current: true
  },
  {
    title: "Network",
    href: "https://lux.network",
    external: true,
    newTab: false,
  },
  {
    title: "Partners",
    href: "https://lux.partners",
    external: true,
    newTab: false,
  },
] as LinkItemDef[]

const buttons = [
  {
    title: "Enter App",
    href: "https://app.lux.market",
    newTab: false,
    external: true,
    variant: 'primary',
  },
] as LinkItemDef[]

const all = [...nav, ...buttons]

const elements = {
  all,
  nav,
  buttons
}

export default elements