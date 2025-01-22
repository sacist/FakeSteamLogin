import { css } from "styled-components";

export const cssScrollBar = css`
    &::-webkit-scrollbar {
    height: 12px;
    width: 14px;
    background-color: transparent;
    z-index: -1;
    overflow: visible;
    }

    &::-webkit-scrollbar-track {
        height: 12px;
    width: 14px;
    background-color: transparent;
    z-index: -1;
    overflow: visible;;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #4e5157;
    width: 10px;
    background-color: #434953;
    border-radius: 10px;
    z-index: -1;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    transition: background-color .32s ease-in-out;
    margin: 4px;
    min-height: 32px;
    min-width: 32px;
    }
    &::-webkit-scrollbar-corner {
    background: #202020;
    background: transparent;
}
`