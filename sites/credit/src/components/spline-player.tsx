import React, { Suspense } from 'react';
import { cn } from '@hanzo/ui/util'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplinePlayer: React.FC<{
  src: string,
  className?: string
}> = ({
  src,
  className
}) => {
  return (
    <div>
      <Suspense fallback={<div className={cn('w-full h-full', className)}></div>}>
        <Spline scene={src} className={cn('!w-full !h-auto pointer-events-none ease-in transition-all', className)} />
      </Suspense>
    </div>
  )
}

export default SplinePlayer
