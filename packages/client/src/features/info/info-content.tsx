import React, { FunctionComponent } from 'react'

import { Anchor } from 'src/shared/ui'

export const InfoContent: FunctionComponent = () => (
  <>
    <h1>About</h1>
    <p>Free open-source new tab extension for browsers</p>
    <p>
      All sources available at&nbsp;
      <Anchor href="https://github.com/unordinarity/slidescape/" target="_blank">Github</Anchor>
    </p>
    <p>
      Made by Anton Medvedev
      (
      <Anchor href="https://github.com/unordinarity/" target="_blank">Github</Anchor>,&nbsp;
      <Anchor href="https://twitter.com/unordinarity/" target="_blank">Twitter</Anchor>,&nbsp;
      <Anchor href="https://linkedin.com/in/unordinarity/" target="_blank">LinkedIn</Anchor>
      )
    </p>
    <p>Inspired by <Anchor href="https://reactjs.org/" target="_blank">Tabliss</Anchor></p>
    <h1>Credits</h1>
    <p>Backdrop images from <Anchor href="https://unsplash.com/" target="_blank">Unsplash</Anchor></p>
    <p>
      <span>Build with open-source technologies:</span>&nbsp;
      <Anchor href="https://reactjs.org/" target="_blank">React</Anchor>,&nbsp;
      <Anchor href="https://feature-sliced.design/" target="_blank">Feature-Sliced</Anchor>,&nbsp;
      <Anchor href="https://vitejs.dev/" target="_blank">Vite</Anchor>,&nbsp;
      <Anchor href="https://effector.dev/" target="_blank">Effector</Anchor>,&nbsp;
      <Anchor href="https://stitches.dev/" target="_blank">Stitches</Anchor>,&nbsp;
      <Anchor href="https://fastify.io/" target="_blank">Fastify</Anchor>&nbsp;
      <span>and</span>&nbsp;
      <Anchor href="https://github.com/unordinarity/slidescape/blob/master/package.json" target="_blank">others</Anchor>
    </p>
    <p>
      <span>Icons from</span>&nbsp;
      <Anchor href="https://www.carbondesignsystem.com/">IBM Carbon Design System</Anchor>
    </p>
    <p>
      <span>Hosted on</span>&nbsp;
      <Anchor href="https://www.netlify.com/" target="_blank">Netlify</Anchor>
    </p>
  </>
)
