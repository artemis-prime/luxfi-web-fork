import type { VideoDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const video = {
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/video/luxgold-poster.jpg',
  sources: ['/assets/video/luxgold.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    md:{
      w: 219,
      h: 327
    },
  }
} satisfies VideoDef

export {
  video as default
}