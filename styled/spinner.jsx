import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 17px;
  height: 17px;
  width: ${(props)=>props.$width}px;
  height: ${(props)=>props.$height}px;
  border: 2px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: ${rotation} 1s linear infinite;
  background-color: #4a4a4a;
  background-color: ${(props)=>props.$back};
`;

export const Spinner = ({$back, $width,$height}) => {
  return <Loader $back={$back} $width={$width} $height={$height}/>;
};