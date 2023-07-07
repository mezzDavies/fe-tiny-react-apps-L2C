import "../styles/main.css";

import Fortune from "./Fortune";
import { useState } from "react";
import setRandomFortune from "../helpers/setRandomFortune.js";
import importedFortunes from "../../../assets/fortunes";

export default function Main() {
  //   setRandomFortune(importedFortunes, setCurrentFortune);

  return (
    <main>
      <p>Press the button for a deep, insightful glimpse of your future...</p>
      <Fortune />
    </main>
  );
}
