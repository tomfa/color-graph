import React, { useState } from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { LinearData, RandomData } from "./data";
import {
  Description,
  Footer,
  Header,
  FixedSection,
  SubHeader
} from "./Components/FixedSection";
import { getColorInterpolator, getNormalizer } from "./utils/palette";
import {
  Button,
  ButtonIcon,
  ButtonLabel,
  ButtonLink
} from "./Components/Button";
import { Menu } from "./Components/Menu";
import { Spinner } from "./Components/Icon";

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
  const nextColorInterpolator = () =>
    setInterpolator(getColorInterpolator({ data }));
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
        <Header>{title}</Header>
        <Description>{description}</Description>
        <Footer>
          Click the buttons in the lower right corner to change data or color
          palette.
        </Footer>
        {selectedValue !== null && (
          <SubHeader>Selected value: {selectedValue}</SubHeader>
        )}

        <Menu>
          <ButtonLink href="https://github.com/tomfa/color-graph">
            <ButtonLabel>Code</ButtonLabel>
            <ButtonIcon>
              <img
                width="27"
                height="27"
                alt="Github icon"
                src="./github.png"
              />
            </ButtonIcon>
          </ButtonLink>
          <Button onClick={nextDataSource}>
            <ButtonLabel>{dataSource.title}</ButtonLabel>
            <ButtonIcon>
              <Spinner color={"black"} />
            </ButtonIcon>
          </Button>
          <Button onClick={nextColorInterpolator}>
            <ButtonLabel>d3.{interpolator.name}</ButtonLabel>
            <ButtonIcon>
              <Spinner color={interpolator.themeColor} />
            </ButtonIcon>
          </Button>
        </Menu>
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
