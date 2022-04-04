import { FunctionComponent } from 'react'
import { Grid24, ChatBot24, Information24, Settings24 } from '@carbon/icons-react'
import { useStore } from 'effector-react'

import { AnchorLikeButton, Surface, stitches } from 'src/shared/ui'
import { globalState } from 'src/entities/global-state'
import { BackdropInfo } from 'src/entities/backdrop'

const Container = stitches.styled(Surface, {
  width: '100%',
  height: '40px',
  flexBasis: '40px',

  padding: '0 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',

  borderTop: '1px solid $border',
})

const Side = stitches.styled('div', {
  flex: '1 1 0',

  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

const Left = stitches.styled(Side, {
  justifyContent: 'flex-start',
})

const Center = stitches.styled('div', {
  position: 'absolute',
  height: '100%',
  left: '50%',
  transform: 'translateX(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Right = stitches.styled(Side, {
  justifyContent: 'flex-end',
})

export const StatusBar: FunctionComponent = () => {
  const globalStateValue = useStore(globalState.store)

  return (
    <Container>
      <Left>
        <AnchorLikeButton
          active={globalStateValue === 'tools-edit'}
          onClick={() => {
            globalState.set(globalStateValue === 'tools-edit' ? 'tools-view' : 'tools-edit')
          }}>
          <Grid24 />
        </AnchorLikeButton>
      </Left>
      <Center>
        <BackdropInfo />
      </Center>
      <Right>
        <AnchorLikeButton
          active={globalStateValue === 'feedback-modal'}
          onClick={() => {
            globalState.set(globalStateValue === 'feedback-modal' ? 'tools-view' : 'feedback-modal')
          }}>
          <ChatBot24 />
        </AnchorLikeButton>
        <AnchorLikeButton
          active={globalStateValue === 'info-modal'}
          onClick={() => {
            globalState.set(globalStateValue === 'info-modal' ? 'tools-view' : 'info-modal')
          }}>
          <Information24 />
        </AnchorLikeButton>
        <AnchorLikeButton
          active={globalStateValue === 'settings-modal'}
          onClick={() => {
            globalState.set(globalStateValue === 'settings-modal' ? 'tools-view' : 'settings-modal')
          }}>
          <Settings24 />
        </AnchorLikeButton>
      </Right>
    </Container>
  )
}
