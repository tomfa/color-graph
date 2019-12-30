import * as d3 from "d3-scale-chromatic";

const interpolators = [
  d3.interpolateBlues,
  d3.interpolateBrBG,
  d3.interpolateBuGn,
  d3.interpolateBuPu,
  d3.interpolateCividis,
  d3.interpolateCool,
  d3.interpolateCubehelixDefault,
  d3.interpolateGnBu,
  d3.interpolateGreens,
  d3.interpolateGreys,
  d3.interpolateInferno,
  d3.interpolateMagma,
  d3.interpolateOrRd,
  d3.interpolateOranges,
  d3.interpolatePRGn,
  d3.interpolatePiYG,
  d3.interpolatePlasma,
  d3.interpolatePuBu,
  d3.interpolatePuBuGn,
  d3.interpolatePuOr,
  d3.interpolatePuRd,
  d3.interpolatePurples,
  d3.interpolateRainbow,
  d3.interpolateRdBu,
  d3.interpolateRdGy,
  d3.interpolateRdPu,
  d3.interpolateRdYlBu,
  d3.interpolateRdYlGn,
  d3.interpolateReds,
  d3.interpolateSinebow,
  d3.interpolateSpectral,
  d3.interpolateTurbo,
  d3.interpolateViridis,
  d3.interpolateWarm,
  d3.interpolateYlGn,
  d3.interpolateYlGnBu,
  d3.interpolateYlOrBr,
  d3.interpolateYlOrRd
];
const getRandomInterPolator = () => {
  return interpolators[Math.floor(Math.random() * interpolators.length)];
};
const normalize = ({ minValue, maxValue, value }) => {
  const constrainedValue = Math.min(Math.max(value, minValue), maxValue);
  return (constrainedValue - minValue) / (maxValue - minValue);
};
export const getInterPolator = ({ data, interpolator }) => {
  const colorFunction = interpolator || getRandomInterPolator();
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  return value => {
    const normalizedValue = normalize({ minValue, maxValue, value });
    return colorFunction(normalizedValue);
  };
};
