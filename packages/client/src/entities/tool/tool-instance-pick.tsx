import { FunctionComponent, useRef } from 'react'
import { useClickAway } from 'react-use'

import { card } from 'src/shared/ui'

import { tool } from './store'

export const ToolInstancePick: FunctionComponent = () => {
  const ref = useRef(null)
  useClickAway(ref, () => {
    tool.editStateSet('nothing-picked')
  })

  return (
    <card.Container ref={ref}>
      <card.Header>
        Pick a tool
      </card.Header>
      <card.Body>
        Tool list
      </card.Body>
    </card.Container>
  )
}
