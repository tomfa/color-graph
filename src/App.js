import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { LinearData } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";
import { getInterPolator } from "./utils/palette";
import * as d3 from "d3-scale-chromatic";
import { InfoBox, InfoDescription, InfoTitle } from "./Components/InfoBox";

export const App = () => {
  const { title, description, data } = LinearData;
  const [getColor, setInterpolator] = useState(() =>
    getInterPolator({ data, interpolator: d3.interpolateBlues })
  );

  const [currentValue, setValue] = useState(null);

  return (
    <FullScreen>
      <FixedSection>
        <SubHeader>
          <a href="https://www.npmjs.com/package/d3-scale-chromatic">
            d3-scale-chromatic
          </a>
        </SubHeader>
        <Header>ColorPalette</Header>
        {currentValue !== null && (
          <SubHeader>Selected value: {currentValue}</SubHeader>
        )}
      </FixedSection>
      <Lines
        data={data}
        getColor={getColor}
        onLineClick={value => {
          setValue(value);
        }}
      />
      <InfoBox>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </InfoBox>
    </FullScreen>
  );
};
