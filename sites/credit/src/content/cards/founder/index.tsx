import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import Preview from './preview.mdx'
import type { Card } from '@/types/card'
import { row1, row2 } from './quickview'
import benefits from '../benefits'

const card: Card = {
  category: 'founder',
  title: 'Founder Card',
  rarity: '1/100,000',
  materials: [
    {
      title: 'Cool Chrome',
      sku: 'LXM-CR-F-CC',
      materialImg: {
        src: '/assets/img/materials/founder-card-cool-chrome-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Cool Chrome'
      },
      cardImg: {
        src: '/assets/img/cards-flat/chrome-cool-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Founder Card Cool Chrome'
      },
      animation: 'https://prod.spline.design/Wpu4L9F5H1tfK1dv/scene.splinecode'
    },
    {
      title: 'Iridescent Chrome',
      sku: 'LXM-CR-F-IC',
      materialImg: {
        src: '/assets/img/materials/founder-card-iridescent-chrome-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Iridescent Chrome'
      },
      cardImg: {
        src: '/assets/img/cards-flat/chrome-irid-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Founder Card Iridescent Chrome'
      },
      animation: 'https://prod.spline.design/O1mz-aE1mHafZXeX/scene.splinecode'
    }
  ],
  annualFee: 0,
  initiationFee: 4999,
  replacementFee: 49,
  rewardPct: 8,
  fxRatePct: 0.75,
  maxAccountHolders: 3,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  preview: <Preview/>,
  karmaRewards: [
    {
      multiplier: 4,
      title: 'Food & Dining',
      description: 'at restaurants worldwide, plus takeout and delivery at home or while traveling.'
    },
    {
      multiplier: 4,
      title: 'Retail Stores',
      description: 'at supermarkets and retail stores worldwide, on up to $25,000 per year in purchases.'
    },
    {
      multiplier: 3,
      title: 'Flights',
      description: 'on flights booked directly with airlines.'
    },
    {
      multiplier: 1,
      title: 'Every Purchase',
      description: 'anytime you use your card in every country for anything you can purchase with your Lux card.'
    }
  ],
  cardDetails: {
    intro: [
      {
        title: 'Never miss a payment again',
        description: 'Each user has unlimited time to pay off their balance and we don\'t charge any late fees or effect ones credit score. Never worry about losing your account as you have unlimited time to pay off your balance or wait for the rewards to settle it.'
      },
      {
        title: 'Automate payment with rewards',
        description: 'Earn 9% rewards off your average available credit automatically, you can also use it to pay off your balance as you spend or pay your annual fee.'
      },
      {
        title: 'Lifestyle Perks and Financial Wellness',
        description: 'Unlock a world where luxury concierge services and AI personal assistants streamline your daily tasks and travel plans. Access exclusive events, top wellness and fitness clubs, and bespoke experiences that cater to your refined tastes. '
      }
    ],
    benefits: benefits
  },
  quickview: { row1, row2 }
}

export {
  card as default,
}