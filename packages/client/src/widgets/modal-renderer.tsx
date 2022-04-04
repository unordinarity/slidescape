import { ComponentType, FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { stitches } from 'src/shared/ui/stitches'
import { globalState, GlobalState } from 'src/entities/global-state'

import { SettingsContent } from 'src/features/settings'
import { FeedbackContent } from 'src/features/feedback'
import { InfoContent } from 'src/features/info'
import { card } from 'src/shared/ui'

const Overlay = stitches.styled('div', {
  position: 'absolute',
  inset: '0',
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: '$modals',
})

const OverlayClickable: FunctionComponent = ({
  children,
}) => (
  <Overlay
    onClick={event => {
      if (event.currentTarget !== event.target) {
        event.stopPropagation()
        return
      }
      globalState.set('tools-view')
    }}>
    {children}
  </Overlay>
)

const ModalContainer = stitches.styled(card.Container, {
  width: '400px',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '100%',
})

const stateToContent: Record<GlobalState, ComponentType | null> = {
  'tools-view': null,
  'tools-edit': null,
  'feedback-modal': FeedbackContent,
  'info-modal': InfoContent,
  'settings-modal': SettingsContent,
}

export const ModalRenderer: FunctionComponent = () => {
  const globalStateValue = useStore(globalState.store)
  const Component = stateToContent[globalStateValue]

  return (Component ? (
      <OverlayClickable>
        <ModalContainer>
          <card.Header>
            Modal
          </card.Header>
          <card.Body>
            <Component />
          </card.Body>
        </ModalContainer>
      </OverlayClickable>
    ) : null
  )
}
