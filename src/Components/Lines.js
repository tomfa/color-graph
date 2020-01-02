import React from "react";
import styled from "styled-components";

import { useWindowSize } from "../utils/styles";

const SVGLine = styled.line`
  transition: stroke-dashoffset 5s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  stroke-dasharray: ${props => props.height};
  stroke-dashoffset: ${props => props.height * 0.6};

  &:hover {
    stroke-dashoffset: 0;
    transition-duration: 0.5s;
  }

  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const Lines = ({ data, onLineClick, getColor }) => {
  const { width, height } = useWindowSize();
  const count = data.length;
  const svgWidth = count * 2;
  const svgHeight = svgWidth * (height / width);

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {data.map((value, i) => (
        <SVGLine
          height={svgHeight}
          key={String(value)+String(i)}
          x1={2 * i + 1}
          x2={2 * i + 1}
          y1={0}
          y2={svgHeight}
          stroke={getColor(value)}
          strokeWidth="2"
          onClick={() => !!onLineClick && onLineClick(value)}
        />
      ))}
    </svg>
  );
};
