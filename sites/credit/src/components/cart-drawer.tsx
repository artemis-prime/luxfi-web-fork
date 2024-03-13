'use client'
import React, { type PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'

import { Icons } from '@hanzo/commerce/components'
import { useCommerce } from '@hanzo/commerce'

import { DrawerMenu } from '@luxdefi/common'
import { buttonVariants } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const CartDrawer: React.FC<PropsWithChildren & {
  className?: string, 
  buttonClx?: string
  isMobile?: boolean
}> = ({
  children,
  className='',
  buttonClx='',
  isMobile=false
}) => {

  const c = useCommerce()
  const CartButton: React.FC<{className?: string}> = observer(({
    className=''
  }) => (
    // has to be a div masquerading as a button (asChild doesn't seem to work in shadcn)
      <div
        aria-label="Cart"
        role='button'
        className={cn(buttonVariants({ variant: 'outline', size: 'icon', rounded: 'lg' }), className)}
      >
      {c.cartItems.length > 0 && (
        <div className={
          'flex flex-col justify-center items-center ' +
          'bg-secondary absolute g-6 ' + 
          'font-sans rounded-full p-2'
        }
        style={{
          fontSize: isMobile ? '12px' : '15px',
          lineHeight: 1,
          right: isMobile ? '-6px' : '-8px',
          top: isMobile ? '-6px' : '-8px',
          width: isMobile ? '16px' : '24px',
          height: isMobile ? '16px' : '24px',
        }}
        >
          {c.cartQuantity}
        </div>
      )}
        <Icons.shoppingCart className="h-4 w-4" aria-hidden="true" />
      </div>            
  ))

  return (
    <DrawerMenu 
      className={className}  
      propogate={false}
      trigger={<CartButton className={'relative ' + buttonClx} />}
    >
      {children}
    </DrawerMenu>
  )
}



export default CartDrawer