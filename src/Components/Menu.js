import React from "react";
import styled from "styled-components";
import { size } from "../utils/styles";

const OuterWrapper = styled.aside`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  box-sizing: border-box;
  color: white;
  text-align: right;

  @media ${size.large} {
    min-width: 200px;
    width: auto;
  }
`;

export const Menu = ({ children }) => (
  <OuterWrapper>
    {children}
  </OuterWrapper>
);
