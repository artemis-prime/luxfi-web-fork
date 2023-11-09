import media from './video'
import modal from './waitlist-modal'

export default    {
  blockType: 'banner',
  title: 'LUX PASS',
  byline: (<>
      FREE priority access to LUX events  <br className='lg:hidden'/>
      and NFT drops.
  </>),
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/pass",
        variant: 'outline'
      },
      {
        text: 'Waitlist',
        props: { variant: 'primary' },
        action: {
          type: 'modal',
          def: modal
        }
      },
    ]
  }
}