
import React  from 'react'

import type { AssetBannerBlock } from '@/content/types'
import ApplyTypography from '@/primitives/apply-typography'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

const AssetBannerBlockComponent: React.FC<{
  asset: AssetBannerBlock
}> = ({
  asset
}) => (<>
    <h2 >
      {asset.title}
    </h2>
    {asset.byline && (
      <h6>
        {asset.byline}
      </h6>
    )}
    {asset.contentBefore && (
      <ApplyTypography className='text-center'>
        {asset.contentBefore}
      </ApplyTypography>
    )}
    {asset.media && (
      <MediaBlockComponent className='self-center' media={asset.media} />
    )}
    {asset.contentAfter && (
      <ApplyTypography className='text-center'>
        {asset.contentAfter}
      </ApplyTypography>
    )}
    {asset.ctas && (
      <div className='flex flex-col gap-2 items-stretch sm:flex-row sm:gap-6 sm:justify-center'>
        <CTABlockComponent cta={asset.ctas} />
      </div>  
    )}
</>
)

export default AssetBannerBlockComponent