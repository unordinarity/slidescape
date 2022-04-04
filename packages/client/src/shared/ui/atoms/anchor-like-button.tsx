import { stitches } from '../stitches'

export const AnchorLikeButton = stitches.styled('button', {
  width: 'auto',
  height: 'auto',

  padding: '0',
  border: 'none',
  lineHeight: '0',

  backgroundColor: 'transparent',
  color: '$textSecondary',
  cursor: 'pointer',

  '&:hover': {
    color: '$textPrimary'
  },

  variants: {
    active: {
      true: {
        color: '$textPrimary'
      }
    }
  },
  defaultVariants: {
    active: false,
  }
})
