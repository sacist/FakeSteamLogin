import styled from "styled-components";
import { $error } from "../../../store/formstores";
import { useUnit } from "effector-react";
export const HelpLink =() => {
    const error=useUnit($error)
    const handleLinkClick=() => {
        const link='https://help.steampowered.com/ru/wizard/HelpWithLogin'
        window.open(link)
    }
    
  return(
    <GrayLink $iserror={error} onClick={handleLinkClick}>Помогите, я не могу войти в аккаунт</GrayLink>
  )
}

const GrayLink=styled.div`  
    color: #afafaf;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
    margin-top: ${({$iserror})=>($iserror ?'15px':'29px')};
`