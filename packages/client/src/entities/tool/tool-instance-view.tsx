import React, { createElement, FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { stitches } from 'src/shared/ui'

import { tool, ToolInstance } from './store'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  flexBasis: '1fr',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

interface Props {
  instance: ToolInstance
}

export const ToolInstanceView: FunctionComponent<Props> = ({
  instance,
}) => {
  const toolVariant = useStore(tool.variantList).find(tool => tool.id === instance.variantId)
  if (!toolVariant) return null

  return (
    <Container>
      {createElement(toolVariant.component, { options: instance.options })}
    </Container>
  )
}
