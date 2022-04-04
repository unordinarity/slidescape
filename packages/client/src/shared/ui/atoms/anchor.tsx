import { stitches } from '../stitches'

export const Anchor = stitches.styled('a', {
  display: 'inline-block',

  color: '$textSecondary',
  cursor: 'pointer',

  '&:hover': {
    color: '$textPrimary'
  }
})
