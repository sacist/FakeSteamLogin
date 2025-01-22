import styled from "styled-components"
import {openFakeWindow } from "./store/storeToOpen"
export const PageWithButton=() => {
  return(
    <>
        <ButtonToOpen onClick={()=>{openFakeWindow(true)}}>Войти через стим</ButtonToOpen>
    </>
  )
}

const ButtonToOpen=styled.button`
    background-color: #0f0f0f;
    color: white;
    font-size: 25px;
    padding: 4px;
    font-weight: 600;
    font-family: "Motiva Sans", Sans-serif;
    position: absolute;
    top: 10%;
    left: 10%;
    border:none;
    border-radius: 2px;
`