import React from "react";

import { FullScreen } from "./Components/Fullscreen";
import { Lines } from "./Components/Lines";
import { randomData } from "./data";

export const App = () => (
  <FullScreen>
    <Lines data={randomData} />
  </FullScreen>
);
