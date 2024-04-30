'use client'
import React, { useEffect, useRef } from 'react'
import { observable, type IObservableValue, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'

import { buttonVariants } from '@hanzo/ui/primitives'
import { cn, type VariantProps } from '@hanzo/ui/util'
import { useCommerce } from '@hanzo/commerce'

import * as Icons from '../icons'

const ANIM_CLX = {
  added: 'item-added-to-cart-animation',
  removed: 'item-removed-from-cart-animation',
  none: ''
}

const BagButton: React.FC<{
  showIfEmpty?: boolean  
  animateOnHover?: boolean
  animateOnQuantityChange?: boolean
  asCheckout?: boolean
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
  iconClx?: string
  onClick?: () => void
}> = observer(({
  showIfEmpty=false,
  animateOnHover=true,
  animateOnQuantityChange=false,
  asCheckout=true,
  size: _size='sm',
  className='',
  iconClx='',
  onClick
}) => {

  const c = useCommerce()
  const animKeyRef = useRef<IObservableValue<keyof typeof ANIM_CLX>>(observable.box('none'))

  useEffect(() => (
      // return IReactionDisposer
    animateOnQuantityChange ? reaction(
      () => (c.cartQuantity),
      (curr, prev) => {
        if (curr > prev) {
          animKeyRef.current.set('added')   
        }
        else {
          animKeyRef.current.set('removed')   
        }    
        setTimeout(() => {
            // Note that this doesn't actually stop the animation
            // just resets the styles after it plays (hence the longer time)
          animKeyRef.current.set('none')   
        }, 800)
      }
    ) : undefined
  ), [])

    // undefined means context is not installed, ie commerce functions are not in use
  if (!c || (!showIfEmpty && c.cartEmpty)) {
    return <div /> // trigger code needs non-null 
  }

  const iconDim = asCheckout ? {w: 19, h: 22} : {w : 24, h: 28}
  const size = asCheckout ? 'sm' : _size

  return (
    <div
      aria-label="Bag"
      role='button'
      onClick={onClick}
      className={cn('group',
        buttonVariants({ variant: asCheckout ? 'primary' : 'ghost' , size, rounded: 'lg' }),
          // Overides the bg change on hover --not a "hover effect" 
        asCheckout ? 'px-3 md:px-4 gap-2' : 'p-0 hover:bg-background',
        ANIM_CLX[animKeyRef.current.get()],  
        className
      )}
    >
      {asCheckout && (<span className='text-primary-fg not-typography font-nav font-semibold text-sm md:text-base'>Checkout</span>)} 
      <div className='aspect-square relative'>
      {!c.cartEmpty && (
        <div className={
          'z-above-content flex flex-col justify-center items-center  ' +
          'absolute left-0 right-0 top-0 bottom-0 ' + 
          'leading-none font-sans font-bold ' + 
          (asCheckout ? 'text-xxs  text-foreground group-hover:opacity-80 ' : 'text-xs text-primary-fg') 
        }>
          <div className='h-[3px] w-full' />
          <div>{c.cartQuantity}</div>
        </div>
      )}
        <Icons.bag 
          width={iconDim.w} 
          height={iconDim.h} 
          className={cn(
            'relative -top-[3px]',
            iconClx,
            asCheckout ? 'fill-background' : 'fill-primary group-hover:fill-primary-hover',
            animateOnHover ? 'group-hover:scale-105 transition-scale transition-duration-300' : ''
          )} 
          aria-hidden="true" 
        />
      </div>
    </div>            
  )
})

export default BagButton
