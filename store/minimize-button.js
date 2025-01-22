import {createStore,createEvent} from 'effector'

export const minimize=createEvent()

export const $minimize=createStore(false).on(minimize,(_,value)=>value)
