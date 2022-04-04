import { stitches } from 'src/shared/ui'

export const BackdropFilter = stitches.styled('div', {
  position: 'absolute',
  inset: '0px',
  width: '100%',
  height: '100%',

  backdropFilter: 'brightness(0.8)',
})
