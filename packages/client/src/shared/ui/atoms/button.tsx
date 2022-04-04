import { stitches } from '../stitches'

export const Button = stitches.styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0',
  border: '1px solid $border',
  borderRadius: '1px',
  backgroundColor: '$surfaceDormant',

  appearance: 'none',
  color: '$textSecondary',

  cursor: 'pointer',

  '&:hover': {
    color: '$textPrimary',
    backgroundColor: '$surfaceActive',
    borderColor: '$border'
  }
})
