import { stitches } from '../stitches'

import { Surface } from '../atoms/surface'

const Container = stitches.styled(Surface, {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  border: '1px solid $border',
  borderRadius: '1px',
})

const Section = stitches.styled('div', {
  padding: '4px 8px',
})

const Header = stitches.styled(Section, {
  flex: '0 0 40px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  borderBottom: '1px solid $separator',
})

const Body = stitches.styled(Section, {
  flex: '1 1 auto',

  overflowY: 'auto',
})

export const card = {
  Container,
  Header,
  Body,
}
