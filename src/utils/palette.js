import React, { useState } from 'react';

const colorPalettes = [
  ['#d77fa1', '#e6b2c6', '#fef6fb', '#d6e5fa'],
  ['#ffa259', '#fe6845', '#fa4252', '#91bd3a'],
  ['#561f55', '#8b2f97', '#cf56a1', '#fcb2bf'],
  ['#f8b195', '#f67280', '#c06c84', '#6c5b7b'],
  ['#f8b195', '#f67280', '#4d80e4', '#6c5b7b'],
  ['#beebe9', '#beebe9', '#fffdf9', '#ffe3ed'],
  ['#9be3de', '#beebe9', '#fffdf9', '#ffe3ed'],
  ['#eafbea', '#6f9a8d', '#1f6650', '#ea5e5e'],
  ['#51eaea', '#ffdbc5', '#ff9d76', '#ef4339'],
  ['#621055', '#b52b65', '#ed6663', '#ffa372'],
];

const getRandomPalette = () => {
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};

export const usePalette = () => {
  const [palette, setPalette] = useState(getRandomPalette());
  const setRandomPalette = () => setPalette(getRandomPalette());

  return [palette, setRandomPalette];
};
