import checked from '/check.svg'
import styled from 'styled-components'
import { useState } from 'react'
import { Text } from '../page-content'
export const RememberMe = () => {
    const [check,setCheck]=useState(true)
    const [hovered,setHovered ]=useState(false)
    const [notification,setNotification]=useState(false)
    const [timeoutId, setTimeoutId] = useState(null)
    const title='При следующем запуске Steam вам не нужно будет вводить пароль или подтверждать вход в аккаунт'
    const handeNotification=() => {
      const id=setTimeout(()=>{
        setNotification(true)
      },500)
      setTimeoutId(id)
    }
    const cancelNotification = () => {
        clearTimeout(timeoutId);
        setNotification(false); 
      };
    
    return (
    <>
    <RememberMeWrapper 
        onClick={()=>setCheck(!check)} 
        onMouseEnter={()=>{setHovered(true)
            handeNotification()}}
        onMouseLeave={()=>{setHovered(false)
            cancelNotification()}
        }>
        <CustomCheckBox $hovered={hovered}>
            <CheckContainer>
                {check &&<CheckSVG/>}
            </CheckContainer>
        </CustomCheckBox>
        <Text $color={'#afafaf'} $marginleft={5} $fontsize={12}>Запомнить меня</Text>
    </RememberMeWrapper>
        {notification &&(
        <Notification $visible={notification}>
            <Text $fontsize={13}>При следующем запуске Steam вам не нужно будет вводить пароль или подтверждать вход в аккаунт.</Text>
        </Notification>
        )}
    </>
    )
}

const RememberMeWrapper = styled.div`
    display: flex;
    width: 30%;
    height: 17px;
    margin-top:10px;
    align-items: center;
    cursor: pointer;
    user-select: none;
`
const CustomCheckBox = styled.div`
    width: 14px;
    height: 14px;
    padding: 3px;
    border-radius: 2px;
    background-color: #393c44; 
    background-color: ${(props)=>props.$hovered?'#3f424b':'#32353c'} ;
    transition: 0.08s;
`
const CheckContainer = styled.div`
    fill: #fff;
    overflow: visible;
    width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 320px;
`
const CheckSVG = styled.div`
    background-image: url(${checked});
    background-size: cover;
    width: 100%;
    height: 100%;
`
const Notification=styled.div`
    display: block;
    width: 300px;
    height: auto;
    background-color: #afafaf;
    margin-left: 65px;
    position: absolute;
    margin-top: 165px;
    border-radius: 2px;
    padding: 5px;
    line-height: 1.4;
    z-index: 900;
`