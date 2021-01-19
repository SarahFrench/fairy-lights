import React from "react"
import Sun from "./Sun"
import Moon from "./Moon"

import "./LightsController.scss"

function LightsController({ toggleMode }) {

  const svgWidth = "75px";
  const svgHeight= "100px";
  const viewBox = {
    x: 0,
    y: 240,
    width: 30, //values come from Inkscape
    height: 35,
  };

  // 0 240 30 35

  const viewboxSettings = () => {
    const { x, y, height, width } = viewBox
    return `${x} ${y} ${width} ${height}`
  }

  return (
    <svg
      id="component-lights-controller"
      className="controls"
      viewBox={viewboxSettings()}
      preserveAspectRatio="xMinYMin slice"
      width={svgWidth}
      height={svgHeight}
    >
      <g className="controls__panel">
        <rect x="1.5" width="15" height="30" rx="7.5" y="244"></rect>
      </g>
      <Moon
        onClick={() => {
          toggleMode()
        }}
      />
      <Sun
        onClick={() => {
          toggleMode()
        }}
      />
    </svg>
  )
}

export default LightsController
