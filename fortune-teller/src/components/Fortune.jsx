import { useState } from "react";
import setRandomFortune from "../helpers/setRandomFortune.js";
import importedFortunes from "../../../assets/fortunes.js";

export default function Fortune() {
  const [currentFortune, setCurrentFortune] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setRandomFortune(importedFortunes, setCurrentFortune);
        }}
      >
        Tell me my fortune!
      </button>
      <p>{currentFortune}</p>

      <button
        onClick={() => {
          setCurrentFortune("");
        }}
      >
        reset
      </button>
    </div>
  );
}
