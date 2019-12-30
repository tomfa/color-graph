import React from 'react';
import styled from 'styled-components';

import { size } from '../utils/styles';

const FullscreenWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media ${size.large} {
    overflow: hidden;
  }
  background-color: #101010;
`;

const InnerFullScreen = styled.div`
  vertical-align: middle;
  width: 100%;
`;

export const FullScreen = ({ children }) => (
  <FullscreenWrapper>
    <InnerFullScreen>{children}</InnerFullScreen>
  </FullscreenWrapper>
);
