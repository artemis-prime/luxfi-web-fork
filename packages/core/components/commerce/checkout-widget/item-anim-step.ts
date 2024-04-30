import { useEffect, useRef } from 'react'
import { makeObservable, reaction, computed } from 'mobx'

import type { LineItem, ObsLineItemRef } from "@hanzo/commerce/types"
import { LineItemRef } from '@hanzo/commerce'


interface ItemAnimationStep extends ObsLineItemRef {
  get running(): boolean
  get item(): LineItem | undefined
}


class SettableItemAnimationStep implements ItemAnimationStep {

  _lineItemRef: LineItemRef

  constructor() {
    this._lineItemRef = new LineItemRef()
    makeObservable(this, {
      running: computed,
      item: computed  
    })
  }

  get running(): boolean {return (!!this._lineItemRef.item)}
  get item(): LineItem | undefined {return (this._lineItemRef.item)}
  set = (v: LineItem | undefined): void => {this._lineItemRef.set(v)}
}

const useItemAnimationStep = (orig: ObsLineItemRef, shiftMs?: number): ItemAnimationStep => {
  if (shiftMs === undefined) {
    return {
      get running(): boolean { return !!orig.item },  
      get item(): LineItem | undefined { return orig.item }  
    }
  }
  return _useItemAnimationStep(orig, shiftMs)
}

const _useItemAnimationStep = (orig: ObsLineItemRef, shiftMs: number): ItemAnimationStep => {

    // a ref that is synced to pressence of 'orig.item', 
    // but is 'running' and has its 'item' for shiftMs longer
    // (Fascilitates for start and end states in animation) 
  const stepRef = useRef<SettableItemAnimationStep>(new SettableItemAnimationStep())

  useEffect(() => (
    reaction(
      () => (orig.item),
      (item: LineItem | undefined) => {
        if (item) { 
          stepRef.current.set(item) 
        }
        else { 
            // Useful for debugging animations
          if (shiftMs != -1) {
            setTimeout(() => { stepRef.current.set(undefined) }, shiftMs) 
          }
        }
      },
      {equals: (val, prev) => (val?.sku === prev?.sku)}
    )
  ), [])

  return stepRef.current
}

export {
  type ItemAnimationStep, 
  useItemAnimationStep
}