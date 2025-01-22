import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const Loader = styled.svg`
  width: 17px;
  height: 17px;
  animation: ${rotate} 1.5s linear infinite;

  circle {
    fill: none;
    stroke: ${(props) => props.color || '#4285f4'};
    stroke-width: 7;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export const GoogleLoader = ({color}) => (
  <LoaderWrapper>
    <Loader viewBox="0 0 50 50" color={color}>
      <circle cx="25" cy="25" r="20"/>
    </Loader>
  </LoaderWrapper>
);