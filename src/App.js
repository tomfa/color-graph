import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { LinearData } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";
import { getColorInterpolator } from "./utils/palette";
import { InfoBox, InfoDescription, InfoTitle } from "./Components/InfoBox";

export const App = () => {
  const { title, description, data } = LinearData;
  const [currentValue, setValue] = useState(null);

  const [interpolator, setInterpolator] = useState(() =>
    getColorInterpolator({ data, interpolatorName: "interpolateBlues" })
  );

  return (
    <FullScreen>
      <FixedSection>
        <SubHeader>
          <a href="https://www.npmjs.com/package/d3-scale-chromatic">
            d3-scale-chromatic
          </a>
        </SubHeader>
        <Header>{interpolator.name}</Header>
        {currentValue !== null && (
          <SubHeader>Selected value: {currentValue}</SubHeader>
        )}
      </FixedSection>
      <Lines
        data={data}
        getColor={interpolator.func}
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
