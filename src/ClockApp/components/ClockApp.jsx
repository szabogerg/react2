import React, { useState } from "react";
import DigitalClock from "./DigitalClock";

function ClockApp() {
  const [mode, setMode] = useState("clock");

  return (
    <div className="clock-app">
      <h1>Óra és Stopperóra</h1>

      <div>
        <button onClick={() => setMode("clock")}>Óra</button>
        <button onClick={() => setMode("stopper")}>Stopper</button>
        {mode === "clock" && <DigitalClock />}
        {mode === "stopper" && <h2>Stopper</h2>}
      </div>
    </div>
  );
}

export default ClockApp;
