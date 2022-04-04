import { nanoid } from 'nanoid'

import { tool } from 'src/entities/tool/store'
import { TimeTool } from 'src/entities/time'
import { NoteTool } from 'src/entities/note'

export const initialize = () => {
  tool.variantListAdd({
    id: 'time',
    title: 'Time',
    component: TimeTool,
    optionsDefault: {},
  })

  tool.variantListAdd({
    id: 'note',
    title: 'Note',
    component: NoteTool,
    optionsDefault: {},
  })

  tool.instanceListAdd([4, {
    id: nanoid(),
    options: {},
    variantId: 'time',
  }])

  tool.instanceListAdd([6, {
    id: nanoid(),
    options: {},
    variantId: 'note',
  }])
}
