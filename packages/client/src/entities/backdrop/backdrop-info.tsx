import { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { Anchor } from 'src/shared/ui'

import { backdrop } from './store'

export const BackdropInfo: FunctionComponent = () => {
  const backdropCurrent = useStore(backdrop.current)

  return (
    <span>
      {backdropCurrent && (
        <>
          <Anchor href="#" target="_blank">Photo</Anchor>&nbsp;
          <span>by</span>&nbsp;
          <Anchor href="#" target="_blank">Author</Anchor>&nbsp;
          <span>from</span>&nbsp;
          <Anchor href="#" target="_blank">Unsplash</Anchor>
        </>
      )}
    </span>
  )
}
