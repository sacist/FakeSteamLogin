import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FakePage } from "./fake-page";
import { useDrag } from "./hooks/useDrag";
import { TopHeader } from "./overlay/headers/top-header";
import { $minimize } from "./store/minimize-button";
import { useUnit } from "effector-react";

export const DraggableComponent = () => {
  const isAnimated=useUnit($minimize)
  const draggableRef = useRef(null);

  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  });

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <DraggableDiv
        ref={draggableRef}
        style={{
          top: position.y,
          left: position.x,
        }}
        onMouseDown={handleMouseDown}
        $isanimated={isAnimated}
      >
        <TopHeader isLoading={loading}></TopHeader>
        <FakePage isLoading={loading}></FakePage>
      </DraggableDiv>
    </>
  );
};

const DraggableDiv = styled.div`
  height: 662px;
  background-color: #c9dcf5;
  position: absolute;
  left: 600px;
  top: 150px;
  transition: transform 0.3s ease, opacity 0.2s ease, width 0.3s ease, height 0.3s ease;
  
  ${(props) =>
    props.$isanimated && 
    `
      transform: translate(-50%, -50%) translate(-20vw, 100vh) scale(0.1);
      opacity: 0;
      pointer-events: none;
    `}
`;
