import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { LinearData, RandomData } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";
import { getColorInterpolator } from "./utils/palette";
import { Button } from "./Components/Button";

export const App = () => {
  const dataSources = [LinearData, RandomData];
  const [dataSourceIndex, setDataSourceIndex] = useState(0);
  const dataSource = dataSources[dataSourceIndex % dataSources.length];
  const { title, description, data } = dataSource;
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
        <Button onClick={() => setDataSourceIndex(dataSourceIndex + 1)}>
          {title}
        </Button>
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
    </FullScreen>
  );
};
