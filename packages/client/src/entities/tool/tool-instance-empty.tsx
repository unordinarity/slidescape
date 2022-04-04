import React, { FunctionComponent } from 'react'
import { Add32 } from '@carbon/icons-react'

import { Button, stitches } from 'src/shared/ui'

import { tool } from './store'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ButtonStyled = stitches.styled(Button, {
  padding: '8px',
  backdropFilter: 'blur(4px)',
})

interface Props {
  slot: number,
}

export const ToolInstanceEmpty: FunctionComponent<Props> = ({
  slot
}) => {
  return (
    <Container>
      <ButtonStyled onClick={() => tool.editStateSet(slot)}>
        <Add32 />
      </ButtonStyled>
    </Container>
  )
}
