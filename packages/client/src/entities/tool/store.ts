import { ComponentType } from 'react'
import { createEvent, createStore } from 'effector'
import { globalState } from 'src/entities/global-state'

// tool options must be easy to serialize and de-serialize map

export type ToolOptions = Record<string, string | number | boolean>

// tools info

export interface ToolVariant<Options extends ToolOptions = {}> {
  id: string,
  title: string,
  component: ComponentType<{ options: Options }>,
  optionsDefault: Options,
}

const variantList = createStore<Array<ToolVariant>>([])
const variantListAdd = createEvent<ToolVariant>()
variantList.on(variantListAdd, (list, variant) => {
  if (list.find(elem => elem.id === variant.id)) return list
  list.push(variant)
  return [...list]
})

// tool instances

const instanceNumber = 9

export interface ToolInstance<Options extends ToolOptions = {}> {
  id: string,
  options: Options,
  variantId: string,
}

const instanceList = createStore<Array<ToolInstance | null>>(new Array(instanceNumber).fill(null))

const instanceListAdd = createEvent<[slot: number, instance: ToolInstance]>()
instanceList.on(instanceListAdd, (state, [slot, instance]) => {
  if (slot >= instanceNumber) return state
  state[slot] = instance
  return [...state]
})

const instanceListSetOptions = createEvent<[slot: number, options: ToolOptions]>()
instanceList.on(instanceListSetOptions, (state, [slot, options]) => {
  if (slot >= instanceNumber) return state
  if (state[slot] === null) return state;
  (state[slot] as ToolInstance).options = options
  return [...state]
})

const instanceListSwap = createEvent<[slotA: number, slotB: number]>()
instanceList.on(instanceListSwap, (state, [slotA, slotB]) => {
  if (slotA > instanceNumber || slotB > instanceNumber) return state;
  [state[slotA], state[slotB]] = [state[slotB], state[slotA]]
  return [...state]
})

const instanceListRemove = createEvent<number>()
instanceList.on(instanceListRemove, (state, slot) => {
  if (slot >= instanceNumber) return state
  state[slot] = null
  return state
})

// instance editing, only one at a time

// slot number or one of special values
type EditState = 'nothing-picked' | number

const editState = createStore<EditState>('nothing-picked')

const editStateSet = createEvent<EditState>()
editState.on(editStateSet, (store, payload) => {
  if (typeof payload === 'number') {
    if (payload >= instanceNumber) return store
    else return payload
  } else {
    return payload
  }
})

editState.on(globalState.store, () => 'nothing-picked')

// export as namespace

export const tool = {
  variantList,
  variantListAdd,
  instanceList,
  instanceListAdd,
  instanceListSwap,
  instanceListRemove,
  editState,
  editStateSet,
}
