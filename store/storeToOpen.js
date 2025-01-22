import {createStore,createEvent} from 'effector'

export const openFakeWindow=createEvent()

export const $fakeWindowOpened=createStore(false).on(openFakeWindow,(_,value)=>value)

