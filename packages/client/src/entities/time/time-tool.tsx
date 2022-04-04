import { FunctionComponent } from 'react'
import { useStore } from 'effector-react'

import { ToolOptions } from 'src/entities/tool/store'

import { time } from './store'

interface Props {
  options: ToolOptions
}

export const TimeTool: FunctionComponent<Props> = () => {
  const timeValue = useStore(time.store)
  return (
    <div>
      {timeValue.getHours().toString().padStart(2, '0')}:{timeValue.getMinutes().toString().padStart(2, '0')}
    </div>
  )
}
