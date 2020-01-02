import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { LinearData, RandomData } from "./data";
import { FixedSection, Header, SubHeader } from "./Components/FixedSection";
import { getColorInterpolator, getNormalizer } from "./utils/palette";
import { Button } from "./Components/Button";

export const App = () => {
  const dataSources = [LinearData, RandomData];
  const [dataSourceIndex, setDataSourceIndex] = useState(0);
  const nextDataSource = () => {
    setDataSourceIndex(dataSourceIndex + 1);
    setSelectedValue(null);
  };
  const dataSource = dataSources[dataSourceIndex % dataSources.length];
  const { title, description, data } = dataSource;
  const [selectedValue, setSelectedValue] = useState(null);

  const [interpolator, setInterpolator] = useState(() =>
    getColorInterpolator({ data, interpolatorName: "interpolateBlues" })
  );
  const normalize = getNormalizer({ data });
  const getColor = value => interpolator.func(normalize(value));

  return (
    <FullScreen>
      <FixedSection>
        <SubHeader>
          <a href="https://www.npmjs.com/package/d3-scale-chromatic">
            d3-scale-chromatic
          </a>
        </SubHeader>
        <Header
          onClick={() => setInterpolator(getColorInterpolator({ data }))}
          color={interpolator.themeColor}
        >
          {interpolator.name}
        </Header>
        <Button onClick={nextDataSource}>{title}</Button>
        {selectedValue !== null && (
          <SubHeader>Selected value: {selectedValue}</SubHeader>
        )}
      </FixedSection>

      <Lines
        data={data}
        getColor={getColor}
        onLineClick={value => {
          setSelectedValue(value);
        }}
      />
    </FullScreen>
  );
};
