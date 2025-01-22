import styled from "styled-components"
import steamIcon from '/favicon.png'
import { GoogleLoader } from "../../styled/loader"
import { UrlBar } from "./url-bar"
import { openFakeWindow } from "../../store/storeToOpen"
import { minimize } from "../../store/minimize-button"
export const TopHeader=({isLoading}) => {
return(
  <AllWrapper>
    <GeneralWrapper>
        {isLoading ? 
        <GoogleLoader></GoogleLoader>
        :<Logo></Logo>}
        <TextOnPanel>{isLoading?'Без имени - Google Chrome':'Войти - Google Chrome'}</TextOnPanel>
        <IconsWrapper $margin={isLoading?334.5:359}>
          <MinimizeButton title="Свернуть" tabIndex={-1} onMouseDown={(e)=>e.stopPropagation()} onClick={()=>{
            minimize(true)
            setTimeout(()=>{
            openFakeWindow(false)
            minimize(false)
            },1000)
            }}></MinimizeButton>
          <ExpandButton title="Развернуть" onMouseDown={(e)=>e.stopPropagation()}></ExpandButton>
          <CloseButton title="Закрыть" onMouseDown={(e)=>{e.stopPropagation()}} onClick={()=>openFakeWindow(false)}></CloseButton>
        </IconsWrapper>
    </GeneralWrapper>
    <UrlBar isLoading={isLoading}></UrlBar>
  </AllWrapper>
)




}




const AllWrapper=styled.div`
  display: flex;
  flex-direction: column;
`

const Logo=styled.div`
    background-image: url(${steamIcon});
    width: 17px;
    height: 17px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 5px;
    flex-shrink: 0;
    user-select: none;
`

const TextOnPanel=styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    margin-left:4px;
    align-self: center;
    color: #000000;
    cursor: default;
    white-space: nowrap;
    user-select: none;
`
const ButtonsOnRight=styled.button`
  width: 33.3333333%;
  height: 96%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  position: relative;
  &:hover{
    background-color: #00000024;
  }
  user-select: none;
  align-self: flex-start;
`
const GeneralWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 28.5px;
  width: 100%;
  margin-top: 2px;
`;
const IconsWrapper=styled.div`
  display: flex;
  min-width: 135px;
    height: 115%;
    margin-left: ${(props)=>`${props.$margin}px`};
    border: none;
    margin-top: 1px;
    justify-content: flex-end;
`
const CloseButton=styled(ButtonsOnRight)`
  &::before,
  &::after {
    content: '';
    position: absolute; 
    width: 14px;
    height: 1.4px;
    background-color: black;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover::before,
  &:hover::after {
    background-color: #ffffff;
  }
  &:hover{
    background-color: #e90000;
    transition: 0.05s;
  }
`
const ExpandButton = styled(ButtonsOnRight)`
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: transparent;
    border: 1.5px solid #000000;
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: border-color 0.3s ease;
  }
`;
const MinimizeButton=styled(ButtonsOnRight)`
  &::before {
    content: '';
    width: 10px;
    height: 0.3%;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease;
  }
`


