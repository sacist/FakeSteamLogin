import styled from "styled-components";
import { login} from "../../../api/login-api-func";
import { $form,updateResponseAPI,$error } from "../../../store/formstores";
import { useUnit } from "effector-react";
import { GoogleLoader } from "../../../styled/loader";
import { useState } from "react";
export const FormButton=() => {
    const form=useUnit($form)
    const [waitingForResponse,setWaitingForResponse]=useState(false)
    const handleLogin=async()=>{
        if(form.login&&form.password){
            setWaitingForResponse(true)
            const res = await login(form.login,form.password)
            console.log(res);            
            updateResponseAPI(res)
            setWaitingForResponse(false)
        }
    }
    return(
        <StyledButton onClick={handleLogin} disabled={waitingForResponse}>{waitingForResponse? (<GoogleLoader color={'black'}></GoogleLoader>):'Войти'}</StyledButton>
    )
}

const StyledButton=styled.button`
    font-family: "Motiva Sans", Sans-serif;
    position: relative;
    background: linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%);
    border-radius: 2px;
    border: none;
    outline: none;
    padding: 14.5px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    width: 61.365%;
    align-self: center;
    &:disabled{
        opacity: 40%;
    };
    &:hover{
        background: linear-gradient(90deg, #06BFFF 30%, #2D73FF 100%);
        transition: 0.3s;
    }
`