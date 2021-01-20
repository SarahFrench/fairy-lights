import React, { lazy, Suspense } from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';

const TopLights = lazy(() => import('./light-components/TopLights'));
const TopLightsMobile = lazy(() => import('./light-components/TopLightsMobile'));


const Lights = ({mode, toggleMode}) => {

  const svgWidth = "100vw";
  const svgHeight= "100vh";
  const viewBox = {
    x: 0,
    y: 0,
    width: 530, //values come from Inkscape
    height: 280,
  };

  const viewboxSettings = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`

  const sideLights = () => {
    return (<svg
      viewBox={viewboxSettings}
      preserveAspectRatio="xMinYMin slice"
      className={`lights lights`}
      width={svgWidth}
      height={svgHeight}
    >
      <g
        id="lights-blub-sockets"
        className="sockets"
        
      >
        {/* Dark grey wires, bulb sockets */}
        <path d="m 0,30.382 c 5.1689207,0.503613 -1.5964893,5.949121 0,0 z"/>
    <path d="m 0,48.937 c 3.6963932,1.547525 -1.4389466,4.770048 0,0 z"/>
    <path d="m 3.0072,16.518 c 7.956497,2.840726 -4.1796145,5.697597 0,0 z"/>
    <path d="m 6.851,73.063 c -7.52910762,-3.818863 4.876066,-5.124017 0,0 z"/>
    <path d="m 7.311,89.94 c -7.5291068,-3.818862 4.876065,-5.124018 0,0 z"/>
    <path d="m 1.8134,105.21 c 0.2891442,-8.387489 6.7386337,2.20964 0,0 z"/>
    <path d="m 5.4468,130.45 c -4.3352633,-7.20396 6.875093,-1.76261 0,0 z"/>
    <path d="m 0,117.22 c 4.4351924,-7.14688 4.7608037,5.21968 0,0 z"/>
    <path d="m 8.2492,145.65 c -7.44235917,3.98771 -1.4994097,-6.88325 0,0 z"/>
    <path d="m 8.3513,164.5 c -7.55309843,-3.77184 4.843718,-5.15446 0,0 z"/>
    <path d="m 0.29417,193.36 c 1.7926762,-3.20699 5.6489757,-0.27497 2.619086,1.67945 C 2.5086928,193.39895 1.2726077,193.9087 0.29417,193.36 Z"/>
    <path d="m 0.31215,212.78 c 0.18513855,-3.66645 4.9372036,-2.72511 3.09897,0.35581 -1.0893775,-1.2916 -1.9764491,-0.29485 -3.09897,-0.35581 z"/>
    <path d="m 0.51422,173.71 c 3.7065118,0.086 2.8551233,4.83881 -0.284588,3.07845 1.276449,-1.11247 0.25096753,-1.96182 0.284588,-3.07845 z"/>      </g>
      <g
        id="lights-wires"
        className="wires"
        
      >
        {/* Wire down */}
        <path d="m 2.3457,16.331 c 1.8031551,6.757502 -1.0068081,13.600604 0.4765445,20.371634 1.325928,5.882744 -1.8063555,11.76444 0.1751273,17.432338 1.0913346,6.642876 1.6731997,13.757641 0.3004968,20.125412 -0.6125143,6.604989 2.8097837,12.964857 0.2082837,19.500632 -2.1027212,7.295224 2.0420382,15.230194 -0.9461573,22.120374 -0.097218,5.87734 3.1588583,11.61013 1.0102523,17.24926 -0.099754,6.97926 1.1639825,13.83686 0.8922439,20.83407 1.4528357,5.17781 1.9403325,10.26206 -0.8122362,14.70185 -1.6960659,6.92891 2.3642941,13.89265 0.2314895,20.87588 -0.597147,6.04463 1.6087698,12.28938 0.021141,18.38333 0.1239428,1.01162 -0.6460243,1.89861 -0.46727,2.93253"/>
      </g>
      <g
        id="lights-lightbulbs-1"
        className="bulbs bulbs--flash"
        
      >
        <g className={`bulbs-set1`}>
          {/* Red bulbs */}
          <ellipse cx="9.0388" cy="143.37" />
          <ellipse cx="0" cy="120" />
          <ellipse cx="0" cy="215" />
          <ellipse cx="-2" cy="34" />
        </g>
        <g className={`bulbs-set3`}>
          {/* Green bulbs */}
          <ellipse cx="9.7007" cy="72.858" />
          <ellipse cx="4.2607" cy="106.84" />
          <ellipse cx="10.745" cy="164" />
          <ellipse cx="0" cy="195" />
        </g>
        <g className={`bulbs-set2`}>
          {/* Yellow bulbs */}
          <ellipse cx="-1" cy="52" />
          <ellipse cx="0" cy="175" />
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="9.7214" cy="89.258" />
          <ellipse cx="8.0149" cy="131.87" />
        </g>
      </g>
      <g
        id="lights-lightbulbs-2"
        className="bulbs bulb-halo-effect"
        
      >
        <g>
          {/* Red bulbs */}
          <ellipse cx="9.0388" cy="143.37" />
          <ellipse cx="0" cy="120" />
          <ellipse cx="0" cy="215" />
          <ellipse cx="-2" cy="34" />
        </g>
        <g>
          {/* Green bulbs */}
          <ellipse cx="9.7007" cy="72.858" />
          <ellipse cx="4.2607" cy="106.84" />
          <ellipse cx="10.745" cy="164" />
          <ellipse cx="0" cy="195" />
        </g>
        <g>
          {/* Yellow bulbs */}
          <ellipse cx="-1" cy="52" />
          <ellipse cx="0" cy="175" />
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="9.7214" cy="89.258" />
          <ellipse cx="8.0149" cy="131.87" />
        </g>
      </g>
    </svg>
    )
  }

    return (
      <BreakpointProvider>
        <Breakpoint medium up>
        <Suspense fallback={<div>Loading... </div>}>
          <TopLights viewboxSettings={viewboxSettings} svgWidth={svgWidth} svgHeight={svgHeight}/>
        </Suspense>
          {sideLights()}
        </Breakpoint>
        <Breakpoint small down>
        <Suspense fallback={<div>Loading... </div>}>
          <TopLightsMobile viewboxSettings={viewboxSettings} svgWidth={svgWidth} svgHeight={svgHeight}/>
        </Suspense>
        </Breakpoint>
      </BreakpointProvider>
      )
}


export default Lights