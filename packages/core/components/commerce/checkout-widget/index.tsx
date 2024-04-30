'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { usePathname, useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { cn } from '@hanzo/ui/util'
import { Image } from '@hanzo/ui/primitives'

import { useCommerceUI } from '@hanzo/commerce'

import CheckoutButton from '../checkout-button'
import useAnimationClxSet from './use-anim-clx-set'
import { useItemAnimationStep, type ItemAnimationStep } from './item-anim-step'
import CONST from './const'

const transStyle = (t: { transition: string, from : string, to: string } | undefined) : any => (
  t ? {
    transitionProperty: t.transition,
    transitionTimingFunction: CONST.animTimingFn,
    transitionDuration: `${CONST.animDurationMs}ms`
  } : {}        
)

const transClx = (on: boolean, t: { transition: string, from : string, to: string } | undefined) : string => (
  on ? (t?.from ?? '') : (t?.to ?? '')
)

const VARS: any = {
  BR: {
    pos: 'bottom-[24px] right-[66px]',
    width: 'w-initial', 
    centerText: false,
    coClx: 'w-auto',
    infoClx: 'w-auto',
    activeItemAnim: {
      co: { 
        transition: 'none',
        from : 'px-3 gap-2.5', 
        to: ''
      },
      coText: {
        transition: 'max-width',
        from : 'max-w-[100px]', 
        to: 'max-w-[0px]'
      },
      info: { 
        transition: 'transform, opacity',
        from : 'scale-x-100 opacity-100 origin-right', 
        to: 'scale-x-0 opacity-0 origin-right'
      }
    },
    showArrow: true
  },
  TR: {
    pos: 'top-[48px] md:top-[80px] right-[28px]',
    width: 'w-initial', 
    centerText: false,
    showQuantity: false,
    showArrow: true,
    coClx: 'w-auto px-3 gap-1',
    infoClx: 'w-auto',
    activeItemAnim: {
      /*
      co: { 
        transition: 'none',
        from : 'px-3 gap-2.5', 
        to: ''
      },
      coText: {
        transition: 'max-width',
        from : 'max-w-[100px]', 
        to: 'max-w-[0px]'
      },
      */
      info: { 
        transition: 'transform',
        from : 'scale-x-100 origin-right', 
        to: 'scale-x-0 origin-right'
      }
    },
  },
  TRIO: {
    pos: 'top-[48px] md:top-[70px] right-[28px]',
    centerText: false,
    showQuantity: true,
    showArrow: true,
    width: 'w-initial', 
    coClx: 'hidden',
    infoClx: 'w-auto',
    activeItemAnim: {
      info: { 
        transition: 'transform, opacity',
        from : 'scale-x-100 opacity-100', 
        to: 'scale-x-50 opacity-0'
      }
    },
  }

}

const v = 'TRIO'

const CheckoutWidget: React.FC<{
  clx?: string
}> = observer(({
  clx=''
}) => {

  const router = useRouter()

  const isCheckout = usePathname() === '/checkout'
  const clxSet = useAnimationClxSet(isCheckout)

  const itemRef = useCommerceUI()
  const step: ItemAnimationStep[] = []

  step.push(useItemAnimationStep(itemRef))
  step.push(useItemAnimationStep(itemRef, CONST.animDurationMs))
  step.push(useItemAnimationStep(itemRef, CONST.animDurationMs * 2))
  step.push(useItemAnimationStep(itemRef, CONST.animDurationMs * 3))

  const handleCheckout = () => { router.push('/checkout')}

  return globalThis?.document?.body && createPortal(
    (<div 
      className={cn(
        VARS[v].width,
        'z-below-modal-2 fixed ',
        VARS[v].pos,
        'rounded-lg',
        'flex',
        step[0].running ? 'bg-background' : '',
        step[1].running ? 'gap-2' : '',
        clxSet.asArray.join(' ')
      )}
      style={step[1].running ? {} : VARS[v].coClx?.includes('hidden') ? {} : CONST.shadowStyle}
    >
      <div 
        className={cn(
          'flex flex-row justify-between items-center', 
          transClx(step[0].running, VARS[v].activeItemAnim.info),
          VARS[v].itemClx, 
          step[1].running ? 'px-3 border rounded-lg bg-level-1 border-muted-3' : '' 
        )}
        style={transStyle(VARS[v].activeItemAnim.info)}
      >
        {step[1].item?.img && (
          <Image def={step[1].item.img} constrainTo={CONST.itemImgConstraint} preload className='grow-0 shrink-0'/>
        )} 
        {step[1].running && (<div className='text-foreground grow ml-1'>
          <p className='whitespace-nowrap text-ellipsis text-sm'>{step[1].item!.title}</p>
          <p className='whitespace-nowrap text-clip text-xxs' >recently added...</p>
        </div>)}
      </div>
      <CheckoutButton 
        handleCheckout={handleCheckout} 
        centerText={VARS[v].centerText ?? !!!itemRef.item}
        variant='primary' 
        rounded='lg' 
        showQuantity={VARS[v].showQuantity ?? true}
        showArrow={VARS[v].showArrow ?? true}
        className={cn(
          transClx((VARS[v].activeItemAnim.coText ? step[3].running : true), VARS[v].activeItemAnim.co),
          VARS[v].coClx
        )} 
        style={transStyle(VARS[v].activeItemAnim.co)}
      >
        <div 
          className={cn(
            'overflow-hidden',
            'flex justify-center items-center',
            transClx(step[2].running, VARS[v].activeItemAnim.coText),
          )} 
          style={transStyle(VARS[v].activeItemAnim.coText)}
        >
          Checkout
        </div>
      </CheckoutButton>
    </div>),
    globalThis?.document?.body
  )
})

export default CheckoutWidget
