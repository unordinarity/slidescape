import React, { FunctionComponent, useEffect } from 'react'
import { useStore } from 'effector-react'
import { Blurhash } from 'react-blurhash'

import { stitches } from 'src/shared/ui/stitches'

import { backdrop } from './store'

const Container = stitches.styled('div', {
  position: 'absolute',
  inset: '0px',
  width: '100%',
  height: '100%',

  zIndex: '$backdrop',
})

const Img = stitches.styled('img', {
  position: 'absolute',
  inset: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  objectFit: 'cover',

  zIndex: '1',
})

interface Props {
  className?: string
}

export const BackdropPicture: FunctionComponent<Props> = ({
  ...props
}) => {
  const backdropCurrent = useStore(backdrop.current)
  useEffect(() => {
    backdrop.refresh()
  }, [])

  return (
    <Container>
      {backdropCurrent && (
        <>
          {backdropCurrent.blur_hash && (
            <Blurhash
              width="100%"
              height="100%"
              hash={backdropCurrent.blur_hash}
            />
          )}
          <picture>
            <source
              media="(max-width: 1079px)"
              srcSet={backdropCurrent.urls.small}
            />
            <source
              media="(min-width: 1080px and max-width: 1919px)"
              srcSet={backdropCurrent.urls.regular}
            />
            <source
              media="(min-width: 1920px)"
              srcSet={backdropCurrent.urls.raw + '&q=80&w=1920'}
            />
            <Img
              src={backdropCurrent.urls.regular}
              alt={backdropCurrent.alt_description ?? 'Photo'}
              {...props}
            />
          </picture>
        </>
      )}
    </Container>
  )
}
