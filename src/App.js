import React from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { randomData } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";

export const App = () => (
  <FullScreen>
    <FixedSection>
      <SubHeader>d3-scale-chromatic</SubHeader>
      <Header>ColorPalette</Header>
    </FixedSection>
    <Lines data={randomData} />
  </FullScreen>
);
