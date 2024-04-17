import React from 'react'
import { type LucideProps } from 'lucide-react'

const BagIcon: React.FC<LucideProps> = (props: LucideProps) => (
  <svg fill="none" viewBox="0 0 15 18" {...props}>
    <path d="m13.6501 5.19282h-2.3255v-.82146c0-2.01258-1.74959-3.634971-3.87568-3.634971s-3.87572 1.622401-3.87572 3.634971v.82146h-2.32543c-.31008 0-.553678.22588-.553678.51341v10.26827c0 .7393.642278 1.3349 1.439548 1.3349h10.63056c.7973 0 1.4395-.5956 1.4395-1.3349v-10.26827c0-.28753-.2436-.51341-.5536-.51341zm-8.96955-.84198c0-1.43756 1.24021-2.60814 2.76837-2.60814 1.52815 0 2.76838 1.17055 2.76838 2.60814v.82146h-5.53675zm8.08365 11.93176h-10.63056c-.1772 0-.3322-.1438-.3322-.3081v-9.75484h1.77176v2.83405c0 .28753.2436.51341.55367.51341.31008 0 .55368-.22588.55368-.51341v-2.83405h5.53675v2.83405c0 .28753.2436.51341.5537.51341.31 0 .5536-.22588.5536-.51341v-2.83405h1.7718v9.75484c0 .1643-.155.3081-.3322.3081z" fill="currentColor"/>
  </svg>
)

export default BagIcon