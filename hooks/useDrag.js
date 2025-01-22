import { useCallback, useEffect, useState } from "react";

export const useDrag = ({ ref }) => {

  
  const [dragInfo, setDragInfo] = useState();
  const [finalPosition, setFinalPosition] = useState({ x: 630, y: 150 });
  const [isDragging, setIsDragging] = useState(false); 
  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const { current: draggableElement } = ref;
    if (draggableElement) {
      const elementWidth = draggableElement.offsetWidth;
      const elementHeight = draggableElement.offsetHeight;

      setFinalPosition({x: centerX - elementWidth / 2,y:centerY - elementHeight / 2})
    }
  },[]);



  const updateFinalPosition = useCallback((x, y) => {
    setFinalPosition({ x, y });
  }, []);


  const handleMouseUp = useCallback((evt) => {
    evt.preventDefault();
    setIsDragging(false);
  }, []);

  const handleMouseDown = useCallback((evt) => {
    evt.preventDefault();

    const { clientX, clientY } = evt;
    const { current: draggableElement } = ref;

    if (!draggableElement) return;

    const { top, left } = draggableElement.getBoundingClientRect();

    setIsDragging(true);
    setDragInfo({
      startX: clientX,
      startY: clientY,
      initialX: left,
      initialY: top,
    });
  }, [ref]);

  const handleMouseMove = useCallback(
    (evt) => {
      if (!isDragging || !dragInfo) return;

      evt.preventDefault();

      const { clientX, clientY } = evt;
      const deltaX = clientX - dragInfo.startX;
      const deltaY = clientY - dragInfo.startY;

      const newPosition = {
        x: dragInfo.initialX + deltaX,
        y: dragInfo.initialY + deltaY,
      };

      updateFinalPosition(newPosition.x, newPosition.y);
    },
    [isDragging, dragInfo, updateFinalPosition]
  );

  const recalculate = useCallback(() => {
    const { current: draggableElement } = ref;
    if (!draggableElement) return;

    const { top, left } = draggableElement.getBoundingClientRect();
    updateFinalPosition(left, top);
  }, [ref, updateFinalPosition]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    position: finalPosition,
    handleMouseDown,
    recalculate,
  };
};
