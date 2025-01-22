import styled from "styled-components";
import { $responseAPI,$error } from "../../../store/formstores";
import { useUnit } from "effector-react";
export const ErrorMessage =() => {
    const messageText=useUnit($responseAPI)
    const isError=useUnit($error)
  return(
    <Message>{isError && messageText?.error}</Message>
  )
}

const Message=styled.div`
    color: #c15755;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    margin-top:13px;
`