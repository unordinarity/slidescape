import { FunctionComponent } from 'react'
import { Options } from '@vitejs/plugin-react'

interface Props {
  options: Options
}

export const NoteTool: FunctionComponent<Props> = () => (
  <div>
    Quick notes
  </div>
)
