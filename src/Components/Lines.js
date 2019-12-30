import React, { useState } from "react";
import styled from "styled-components";
import * as d3 from "d3-scale-chromatic";

import { getInterPolator } from "../utils/palette";
import { useWindowSize } from "../utils/styles";

const SVGLine = styled.line`
  transition: all 1.5s;
  cursor: pointer;

  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const Lines = ({ data }) => {
  const { width, height } = useWindowSize();
  const [getColor, setInterpolator] = useState(() =>
    getInterPolator({ data, interpolator: d3.interpolateBlues })
  );
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
          key={i}
          x1={2 * i + 1}
          x2={2 * i + 1}
          y1={0}
          y2={svgHeight}
          stroke={getColor(value)}
          strokeWidth="2"
          onClick={() => setInterpolator(() => getInterPolator({ data }))}
        />
      ))}
    </svg>
  );
};
