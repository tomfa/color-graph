import React, { useState } from "react";
import styled from "styled-components";

import { usePalette } from "../utils/palette";
import { useWindowSize } from "../utils/styles";

const getPositions = ({ width, height, count }) => {
  return Array(count)
    .fill()
    .map(radius => [
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * height)
    ]);
};

const SVGLine = styled.line`
  transition: all 1.5s;
  cursor: pointer;

  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.5;
  }
`;

export const Lines = () => {
  const { width, height } = useWindowSize();
  const [palette, setPalette] = usePalette();
  const count = palette.length * 5;
  const positions = getPositions({ width, height, count });
  const svgWidth = count * 2;
  const svgHeight = svgWidth * (height / width);

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {positions.map(([cx, cy], i) => (
        <SVGLine
          key={i}
          x1={2*i+1}
          x2={2*i+1}
          y1={0}
          y2={svgHeight}
          stroke={palette[i % palette.length]}
          strokeWidth="2"
          onClick={() => setPalette()}
        />
      ))}
    </svg>
  );
};
