import React from 'react';
import styled from 'styled-components';

const FullscreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: fixed;
  bottom: 0;
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
