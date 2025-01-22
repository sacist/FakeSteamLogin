import styled from "styled-components"
import pageContentBack from '/PageContentBack.jpg'
import { Form } from "./form/form"
import { QRCodeElement } from "./QR-code"
import { NewToSteam } from "./new-to-steam"
export const PageContent=() => {
       
  return(
    <PageContentWrapper>
        <Background></Background>
        <Content >
            <Text $color={'white'} $fontsize={30} $margintop={17} $fontweight={1000} >Вход</Text>
            <Form/>
            <QRCodeElement/>
            <NewToSteam/>
        </Content>
    </PageContentWrapper>
  )
}


const PageContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 100%;
  background-image: url(${pageContentBack});
  background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(${pageContentBack}) center top no-repeat, #181A21;
`;

const Content = styled.div`
  position: relative;
  z-index: 2; 
  font-family: "Motiva Sans", Sans-serif;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  align-items: center;
  padding-bottom: 120px;
`;
export const Text=styled.div`
    margin-top: ${(props)=>`${props.$margintop}px`};
    margin-left: ${(props)=>`${props.$marginleft}px`};
    font-weight: ${(props)=>`${props.$fontweight}`};
    font-size: ${(props)=>`${props.$fontsize}px`};
    color: ${(props)=>`${props.$color}`};
    letter-spacing: .02em;
    &::selection{
    background: #54a5d4;
      text-shadow: 1px 1px 2px #000000aa;
      color: #fff;
  }
`