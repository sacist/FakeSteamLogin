import styled from "styled-components"
import pageInfo from "/PageInfo.svg"
import pageInfoLoading from '/PageInfoLoading.svg'
import keyButton from '/KeyButton.svg'



export const UrlBar=({isLoading}) => {
    const Url1='steamcommunity.com/openid/loginform/?goto=%2Fopenid%2Flogin%3Fopenid.mode%3Dcheckid_setup%26openid.ns%3Dhttp%2'
    const Url2='rain.gg/auth/steam'
    return(
        <UrlWrapper>
            <PageInfoButton $isloading={isLoading} title="Сведения о сайте"></PageInfoButton>
            <StyledInput value={!isLoading?Url1:Url2} readOnly/>
            {!isLoading && <KeyButton title="Управление паролями"></KeyButton>}           
        </UrlWrapper>
    )
}

const UrlWrapper=styled.div`
    background-color: rgb(232, 240, 252);
    height: 33px;
    width: 100%;
    border-top: solid 1px rgb(178, 178, 178);
    border-bottom: solid 1px rgb(178, 178, 178);
    display: flex;
    align-items: center;
    &:hover{
        background-color: rgb(224, 229, 236);
        transition: 200ms;
    }
    flex-shrink: 0;
`
const StyledInput = styled.input`
  width: 87%;
  height: 85%;
  font-size: 14.1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  background-color: transparent;
  border: none;
  margin-left: 7px;
  color: #131212;

  &:focus {
    outline: none;
  }
`;
const PageInfoButton=styled.button`
    background-image: ${(props)=>props.$isloading?`url(${pageInfoLoading})`:`url(${pageInfo})`};
    background-repeat: no-repeat;
    background-size: 70%;
    width: 24px;
    height: 24px;
    border: none;
    background-color: white;
    border-radius: 50%;
    background-position: center;
    margin-left: 4px;
    &:hover{
    background-color: #00000024;
    transition: 0.4s;
  }
`
const KeyButton=styled.button`
    background-image: url(${keyButton});
    background-repeat: no-repeat;
    background-size: 87%;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    background-position: center;
    margin-left: 12px;
    background-color: transparent;
    &:hover{
    background-color: #00000016;
    transition: 0.4s;
  }
`

