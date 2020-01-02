import React from "react";
import styled from "styled-components";

const InlineSVG = styled.svg.attrs(() => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.8em",
  height: "1.8em",
  viewBox: "0 0 12 12"
}))``;

const SVGCircle = styled.circle.attrs(() => ({ cx: "6", cy: "6", r: "5.5" }))`
  stroke: ${props => props.color};
  stroke-linecap: round;
  fill: none;

  ${InlineSVG}:active & {
    fill: ${props => props.color};
  }
`;

export const Spinner = ({ color = "rgb(16, 88, 160)" }) => (
  <InlineSVG>
    <SVGCircle color={color}></SVGCircle>
  </InlineSVG>
);
