import React, { FunctionComponent, useEffect } from 'react'

import { stitches } from 'src/shared/ui/stitches'

import { BackdropPicture } from 'src/entities/backdrop'
import { ToolSlotGrid } from 'src/entities/tool'
import { ModalRenderer } from 'src/widgets/modal-renderer'
import { StatusBar } from 'src/widgets/status-bar'

import { daemons } from './daemons'
import { initialize } from './initialize'

initialize()

const AppContainer = stitches.styled('div', {
  position: 'absolute',
  inset: '0px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

const ToolLayer = stitches.styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
})

const ToolContainer = stitches.styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const App: FunctionComponent = () => {
  useEffect(() => {
    daemons.forEach(daemon => daemon.watch())

    return () => daemons.forEach(daemon => {
      if (daemon.sleep) daemon.sleep()
    })
  })

  return (
    <AppContainer>
      <BackdropPicture />
      <ToolLayer>
        <ToolContainer>
          <ToolSlotGrid />
          <ModalRenderer />
        </ToolContainer>
        <StatusBar />
      </ToolLayer>
    </AppContainer>
  )
}
