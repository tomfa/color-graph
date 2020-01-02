import * as d3 from "d3-scale-chromatic";

const interpolators = {
  interpolateBlues: d3.interpolateBlues,
  interpolateBrBG: d3.interpolateBrBG,
  interpolateBuGn: d3.interpolateBuGn,
  interpolateBuPu: d3.interpolateBuPu,
  interpolateCividis: d3.interpolateCividis,
  interpolateCool: d3.interpolateCool,
  interpolateCubehelixDefault: d3.interpolateCubehelixDefault,
  interpolateGnBu: d3.interpolateGnBu,
  interpolateGreens: d3.interpolateGreens,
  interpolateGreys: d3.interpolateGreys,
  interpolateInferno: d3.interpolateInferno,
  interpolateMagma: d3.interpolateMagma,
  interpolateOrRd: d3.interpolateOrRd,
  interpolateOranges: d3.interpolateOranges,
  interpolatePRGn: d3.interpolatePRGn,
  interpolatePiYG: d3.interpolatePiYG,
  interpolatePlasma: d3.interpolatePlasma,
  interpolatePuBu: d3.interpolatePuBu,
  interpolatePuBuGn: d3.interpolatePuBuGn,
  interpolatePuOr: d3.interpolatePuOr,
  interpolatePuRd: d3.interpolatePuRd,
  interpolatePurples: d3.interpolatePurples,
  interpolateRainbow: d3.interpolateRainbow,
  interpolateRdBu: d3.interpolateRdBu,
  interpolateRdGy: d3.interpolateRdGy,
  interpolateRdPu: d3.interpolateRdPu,
  interpolateRdYlBu: d3.interpolateRdYlBu,
  interpolateRdYlGn: d3.interpolateRdYlGn,
  interpolateReds: d3.interpolateReds,
  interpolateSinebow: d3.interpolateSinebow,
  interpolateSpectral: d3.interpolateSpectral,
  interpolateTurbo: d3.interpolateTurbo,
  interpolateViridis: d3.interpolateViridis,
  interpolateWarm: d3.interpolateWarm,
  interpolateYlGn: d3.interpolateYlGn,
  interpolateYlGnBu: d3.interpolateYlGnBu,
  interpolateYlOrBr: d3.interpolateYlOrBr,
  interpolateYlOrRd: d3.interpolateYlOrRd
};
const getInterPolator = name => {
  const names = Object.keys(interpolators);
  if (!name || !names.includes(name)) {
    return null;
  }
  return { name, func: interpolators[name] };
};
const getRandomInterPolator = () => {
  const names = Object.keys(interpolators);
  const name = names[Math.floor(Math.random() * names.length)];
  return { name, func: interpolators[name] };
};
const normalize = ({ minValue, maxValue, value }) => {
  const constrainedValue = Math.min(Math.max(value, minValue), maxValue);
  return (constrainedValue - minValue) / (maxValue - minValue);
};
export const getColorInterpolator = ({ data, interpolatorName }) => {
  const interPolator =
    getInterPolator(interpolatorName) || getRandomInterPolator();
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const normalizedInterpolator = value => {
    const normalizedValue = normalize({ minValue, maxValue, value });
    return interPolator.func(normalizedValue);
  };
  return { name: interPolator.name, func: normalizedInterpolator };
};
