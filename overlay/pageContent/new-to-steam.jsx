import styled from "styled-components";
import { Text } from "./page-content";
export const NewToSteam = () => {
    const handleLinkClick=() => {
        const link='https://store.steampowered.com/about'
        window.open(link)
    }
    
  return (
    <NewToWrapper>
        <Text $fontsize={20} $fontweight={800} $color={'white'}>Первый раз в Steam?</Text>
        <NewAccountRegLink>Создать аккаунт</NewAccountRegLink>
        <TextWithAnchorWrapper>Это бесплатно и просто. Откройте для себя тысячи игр, в которые можно играть с миллионами новых друзей.&nbsp;
            <StyledA onClick={handleLinkClick}>Узнайте больше о Steam</StyledA>
        </TextWithAnchorWrapper>
    </NewToWrapper>
  );
};

const NewToWrapper=styled.div`
    display: flex;
    flex-direction: column;
    padding-top:60px;
    font-family: "Motiva Sans", Sans-serif;
    width: 100%;
    align-items: center;
`
const NewAccountRegLink=styled.div`
    background: linear-gradient(to right, #47bfff 5%, #1a44c2 60%);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background-position: 25%;
    background-size: 330% 100%;
    border-radius: 2px;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    margin-top: 15px;
    color: white;
    width: 150px;
    align-self: center;
    padding: 0px 9.5px;
    cursor: pointer;
    text-decoration: none ;
    &:hover{
        background: linear-gradient(90deg, #06BFFF 20%, #2D73FF 100%);
        transition: 0.3s;
    }
`
const TextWithAnchorWrapper=styled.div`
    display: flex;
    text-align: center;
    font-size: 14px;
    color: #afafaf;
    font-family: "Motiva Sans", Sans-serif;
    margin-top: 36px;
    display: block;
    unicode-bidi: isolate;
    font-weight: normal;
    max-width: 300px;
`
const StyledA=styled.div`
    color: #afafaf;
    text-decoration: underline;
    cursor: pointer;
    display: inline;
`