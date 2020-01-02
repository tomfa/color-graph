import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { randomData as data } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";
import { getInterPolator } from "./utils/palette";
import * as d3 from "d3-scale-chromatic";

export const App = () => {
  const [getColor, setInterpolator] = useState(() =>
    getInterPolator({ data, interpolator: d3.interpolateBlues })
  );

  return (
    <FullScreen>
      <FixedSection>
        <SubHeader>d3-scale-chromatic</SubHeader>
        <Header>ColorPalette</Header>
      </FixedSection>
      <Lines
        data={data}
        getColor={getColor}
        onLineClick={value => {
          setInfoText(getColor(value));
        }}
      />
    </FullScreen>
  );
};
