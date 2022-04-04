import React, { FunctionComponent } from 'react'
import { SettingsAdjust24 } from '@carbon/icons-react'

import { AnchorLikeButton, card, stitches } from 'src/shared/ui'

import { tool, ToolInstance } from './store'
import { ToolInstanceView } from './tool-instance-view'

const Container = stitches.styled(card.Container, {
  width: '100%',
  height: '100%',
  flexBasis: '1fr',

  position: 'relative',

  border: '1px solid $border',

  cursor: 'move',

  '& > *': {
    pointerEvents: 'none',
  },
})

const Header = stitches.styled(card.Header, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
})

const SettingsIconWrapper = stitches.styled(AnchorLikeButton, {
  pointerEvents: 'all',
})

interface Props {
  slot: number,
  instance: ToolInstance,
}

export const ToolInstanceEditable: FunctionComponent<Props> = ({
  slot,
  instance,
}) => (
  <Container draggable="true">
    <Header>
      <SettingsIconWrapper onClick={() => tool.editStateSet(slot)}>
        <SettingsAdjust24 />
      </SettingsIconWrapper>
    </Header>
    <card.Body>
      <ToolInstanceView instance={instance} />
    </card.Body>
  </Container>
)
