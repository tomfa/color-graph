import React from "react";
import styled from "styled-components";

const OuterWrapper = styled.aside`
  position: fixed;
  bottom: 15px;
  right: 15px;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InnerWrapper = styled.div`
  margin: 15px;
  max-width: 200px;
  color: white;
`;

export const InfoTitle = styled.h1`
  font-size: 1rem;
  font-size: bold;
`;

export const InfoDescription = styled.p`
  font-size: 0.8rem;
`;

export const InfoBox = ({ children }) => (
  <OuterWrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);
