import {createStore,createEvent} from 'effector'

export const updateForm = createEvent();

export const $form = createStore({
  login: "",
  password: "",
}).on(updateForm, (state, value) => ({
  ...state,
  ...value,
}));



export const updateResponseAPI=createEvent()

export const $responseAPI=createStore(null).on(updateResponseAPI,(_,value)=>value)

export const setError=createEvent()

export const $error=createStore(false).on(setError,(_,value)=>value).reset(updateResponseAPI)

$responseAPI.watch((response)=>{
  if (response?.error){
    setError(true)
  }
})