import styled from "styled-components";
import FakeQR from '/FakeQR.png';
import { Text } from "./page-content";
import { Spinner } from "../../styled/spinner";
import { useState } from "react";

export const QRCodeElement = () => {
    const [pressed,setIsPressed]=useState(false)
    const handleLinkClick=() => {
        const link='https://store.steampowered.com/mobile'
        window.open(link)
    }
    
    return (
      <>
        <Text $color={"#1999ff"} $fontsize={12} $margintop={52}>
          ИЛИ ПРИ ПОМОЩИ QR-КОДА
        </Text>
        <QRcodeWrapper>
          <BlurredQR />
          {!pressed?(<ReloadWrapper>
            <ReloadButton onClick={()=>{
              setIsPressed(true)
              setTimeout(()=>{
                setIsPressed(false)
              },10000)
              }}>
              <StyledSvg
                width="40px"
                height="40px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
                />
                <polygon
                  points="147.639,108.361 245.755,10.166 245.834,108.361"
                  fill="#fff"
                />
              </StyledSvg>
            </ReloadButton>
          </ReloadWrapper>):(
            <LoaderWrapper>
              <Spinner $width={30} $height={30}></Spinner>
            </LoaderWrapper>
          )}
          
        </QRcodeWrapper>
        <TextWithAnchorWrapper>
          Используйте&nbsp;
          <StyledA onClick={handleLinkClick}>
            мобильное приложение Steam,
          </StyledA>
          &nbsp;чтобы войти с помощью QR-кода
        </TextWithAnchorWrapper>
      </>
    );
  };

const QRcodeWrapper = styled.div`
  position: relative;
  width: 199px;
  height: 199px;
  margin-top: 3px;
  border-radius: 10px;
`;

const BlurredQR = styled.div`
  background-image: url(${FakeQR});
  width: 100%;
  height: 100%;
  background-size: 84%;
  background-repeat: no-repeat;
  background-color: white;
  background-position: center;
  border-radius: 10px;
  filter:blur(4px);
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const TextWithAnchorWrapper=styled.div`
    display: flex;
    text-align: center;
    font-size: 12px;
    color: #afafaf;
    font-family: "Motiva Sans", Sans-serif;
    margin-top: 10px;
`
const StyledA=styled.div`
    color: #afafaf;
    text-decoration: underline;
    cursor: pointer;
`
const ReloadWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .75);
  width:60px;
  height: 60px;
  padding: 12px;
  border-radius: 3px;
`;

const ReloadButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background 0.2s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledSvg = styled.svg`
  cursor: pointer;
  fill: currentColor;
  color: white;
  width: 40px;
  height: 40px;
`;