import { Text } from "../page-content";
import styled from "styled-components";
import { $form,updateForm,$error,setError } from "../../../store/formstores";
import {useUnit} from 'effector-react'
export const FormInputs = () => {
    const form=useUnit($form)
    const isError=useUnit($error)
    const updateStore=useUnit(updateForm)   
    const handleChange = e => {
        const { name, value } = e.target
        updateStore({[name]:value})
        setError(false)
       }   
    return (
    <>
        <Text $fontsize={12.5} $fontweight={500} $color={'#1999ff'}>ВОЙТИ, ИСПОЛЬЗУЯ ИМЯ АККАУНТА</Text>
        <StyledInput value={form.login} onChange={handleChange} name="login" $isfilled={form.login === ''}  autoComplete="off" $error={isError}/>
        <Text $margintop={15} $fontsize={12.5} $color={'#afafaf'}>ПАРОЛЬ</Text>
        <StyledInput value={form.password} onChange={handleChange} name="password" $isfilled={form.password === ''} type="password" autoComplete="off" $error={isError}/>
    </>
    )
}



const StyledInput = styled.input`
    border-radius: 2px;
    color: #fff;
    padding: 10px;
    background-color: #32353c;
    background-color:'#32353';
    outline: none;
    font-size: 17px;
    border: 1px solid #32353c;
    margin-top: 3px;
    &:focus{
        background-color:rgb(232, 240, 254);
        color:black ;
    }
    &::selection{
    background: #54a5d4;
      text-shadow: 1px 1px 2px #000000aa;
      color: #fff;
  }
    border-color: ${(props)=>props.$error && '#c15755'};
`