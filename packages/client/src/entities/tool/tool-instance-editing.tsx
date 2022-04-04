import React, { FunctionComponent, useRef } from 'react'
import { Checkmark24, Close24, Draggable24 } from '@carbon/icons-react'
import { useClickAway } from 'react-use'

import { card, stitches } from 'src/shared/ui'

import { tool } from './store'

export const ToolInstanceEditing: FunctionComponent = () => {
  const ref = useRef(null)
  useClickAway(ref, () => {
    tool.editStateSet('nothing-picked')
  })

  return (
    <card.Container ref={ref}>
      <card.Header>
        <Draggable24 />
        <Close24 />
        <Checkmark24 />
      </card.Header>
      <card.Body>
        Tool edited
      </card.Body>
    </card.Container>
  )
}
