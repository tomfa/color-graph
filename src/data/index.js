export const LinearData = {
  title: "Linear data",
  defaultColors: 'interpolateTurbo',
  description: "Data contains values 0, 1, 2...39.",
  data: Array(40)
    .fill(null)
    .map((_, i) => i)
};

export const RandomData = {
  title: "Random data",
  defaultColors: 'interpolateTurbo',
  description: "Data is randomly generated.",
  data: Array(40)
    .fill(null)
    .map(() => Math.floor(Math.random() * 100))
};

export const CO2emissionData = {
  title: "Carbon emission data",
  defaultColors: 'interpolateTurbo',
  description:
    "Global Carbon Emissions from Fossil-Fuel Burning, " +
    "Cement Manufacture, and Gas Flaring: 1945-2013. Values in million metric tons.",
  source: 'https://cdiac.ess-dive.lbl.gov/trends/emis/overview.html',
  data: [
    1160,
    1238,
    1392,
    1469,
    1419,
    1630,
    1767,
    1795,
    1841,
    1865,
    2042,
    2177,
    2270,
    2330,
    2454,
    2569,
    2580,
    2686,
    2833,
    2995,
    3130,
    3288,
    3393,
    3566,
    3780,
    4053,
    4208,
    4376,
    4614,
    4623,
    4596,
    4864,
    5016,
    5074,
    5357,
    5301,
    5138,
    5094,
    5075,
    5258,
    5417,
    5583,
    5725,
    5936,
    6066,
    6096,
    6171,
    6110,
    6104,
    6208,
    6344,
    6491,
    6589,
    6571,
    6559,
    6727,
    6886,
    6946,
    7367,
    7735,
    8025,
    8307,
    8488,
    8738,
    8641,
    9137,
    9508,
    9671,
    9776
  ]
};
