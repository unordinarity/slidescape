import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { stitches } from 'src/shared/ui'
import { globalState } from 'src/entities/global-state'

import { tool } from './store'
import { ToolInstanceEmpty } from './tool-instance-empty'
import { ToolInstancePick } from './tool-instance-pick'
import { ToolInstanceView } from './tool-instance-view'
import { ToolInstanceEditable } from './tool-instance-editable'
import { ToolInstanceEditing } from './tool-instance-editing'

const Grid = stitches.styled('div', {
  width: '100%',
  height: '100%',
  flexBasis: '1fr',

  padding: '24px',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
})

export const ToolSlotGrid: FunctionComponent = () => {
  const toolInstanceList = useStore(tool.instanceList)
  const editState = useStore(tool.editState)
  const globalStateValue = useStore(globalState.store)

  return (
    <Grid>
      {toolInstanceList.map((instance, slot) => (
        <>
          {/* I hate it without any consistent reasons */}
          {(globalStateValue !== 'tools-edit' && !instance) && (
            <div key={slot} />
          )}
          {(globalStateValue !== 'tools-edit' && instance) && (
            <ToolInstanceView key={instance.id} instance={instance} />
          )}
          {(globalStateValue === 'tools-edit' && editState === 'nothing-picked' && !instance) && (
            <ToolInstanceEmpty key={slot} slot={slot} />
          )}
          {(globalStateValue === 'tools-edit' && editState === 'nothing-picked' && instance) && (
            <ToolInstanceEditable key={instance.id} slot={slot} instance={instance} />
          )}
          {(globalStateValue === 'tools-edit' && typeof editState === 'number' && editState === slot && !instance) && (
            <ToolInstancePick key={slot} />
          )}
          {(globalStateValue === 'tools-edit' && typeof editState === 'number' && editState === slot && instance) && (
            <ToolInstanceEditing key={instance.id} />
          )}
          {(globalStateValue === 'tools-edit' && typeof editState === 'number' && editState !== slot && !instance) && (
            <div key={slot} />
          )}
          {(globalStateValue === 'tools-edit' && typeof editState === 'number' && editState !== slot && instance) && (
            <ToolInstanceView key={instance.id} instance={instance} />
          )}
        </>
      ))}
    </Grid>
  )
}
