import { createStitches } from '@stitches/react'

import { stacks } from './utils/font-stacks'

export const stitches = createStitches({
  theme: {
    space: {},
    fonts: {
      paragraph: stacks.sansSerif,
    },
    zIndices: {
      modals: 1,
      tools: 0,
      backdrop: -1,
    },
  }
})
