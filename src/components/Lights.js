import React from "react"
import  { Breakpoint, BreakpointProvider } from 'react-socks';

const Lights = ({mode, toggleMode}) => {

  const svgWidth = "100vw";
  const svgHeight= "100vh";
  const viewBox = {
    x: 0,
    y: 0,
    width: 530, //values come from Inkscape
    height: 280,
  };

  const viewboxSettings = () => {
    const { x, y, height, width } = viewBox
    return `${x} ${y} ${width} ${height}`
  }


  const topLights = () => {
    return (<svg
      viewBox={viewboxSettings()}
      preserveAspectRatio="xMinYMin slice"
      className={`lights`}
      width={svgWidth}
      height={svgHeight}
    >
      <g id="lights-bar" className="bar" >
        {/* The horizontal bar */}
        <rect x="0" y="11.747" width="529.83" height="4.9531" />
      </g>
      <g
        id="lights-blub-sockets"
        className="sockets"
        
      >
        {/* Dark grey wires, bulb sockets */}
        <path d="m 21.623,32.689 c 3.666185,-7.924045 5.297135,4.68152 0,0 z"/>
        <path d="m 37.341,33.637 c -1.553205,-7.034308 6.328761,-1.770427 0,0 z"/>
        <path d="m 10.113,26.111 c 7.252163,-4.929964 2.125064,6.715959 0,0 z"/>
        <path d="m 60.165,14.932 c -6.109691,3.910262 -3.88966,-5.2276082 0,0 z"/>
        <path d="m 45.107,24.219 c -6.713661,-5.609953 5.965951,-3.822108 0,0 z"/>
        <path d="m 47.617,6.845 c 5.276825,6.958406 -6.677239,2.3973776 0,0 z"/>
        <path d="m 17.137,14.49 c -3.940523,6.055796 -5.719302,-3.181681 0,0 z"/>
        <path d="m 6.1109,7.9672 c 3.3632936,8.044412 -7.06751896,0.6694335 0,0 z"/>
        <path d="m 55.002,25.284 c 3.625878,-7.942157 5.320979,4.655073 0,0 z"/>
        <path d="m 69.469,23.987 c 5.092392,5.136927 -4.406882,4.838709 0,0 z"/>
        <path d="m 93.052,9.7947 c 4.476286,5.679056 5.405716,-3.6781828 0,0 z"/>
        <path d="m 104.05,2.6712 c -3.99657,6.0133125 5.26786,3.9047346 0,0 z"/>
        <path d="m 105.79,14.572 c 2.91727,-8.223548 5.70726,4.180344 0,0 z"/>
        <path d="m 116.36,19.706 c -4.6989,-5.499782 -5.25508,3.885918 0,0 z"/>
        <path d="m 111.23,27.795 c 5.83237,-6.525767 3.69858,6.00548 0,0 z"/>
        <path d="m 127.59,19.718 c 4.02459,7.739263 -6.98738,1.24935 0,0 z"/>
        <path d="m 122.7,31.295 c 0.56173,-7.180704 6.56949,0.112569 0,0 z"/>
        <path d="m 80.209,20.382 c 6.669603,5.661327 -5.99552,3.776242 0,0 z"/>
        <path d="m 91.501,22.365 c -5.669655,-6.647543 6.527746,-2.773154 0,0 z"/>
        <path d="m 137.69,27.623 c -4.87643,-5.338273 4.6027,-4.656627 0,0 z"/>
        <path d="m 141.57,10.278 c 6.9796,5.303263 2.47895,-6.5946877 0,0 z"/>
        <path d="m 147.56,19.477 c -7.6125,-4.362681 -1.59924,6.857949 0,0 z"/>
        <path d="m 153.79,3.2612 c -6.58941,3.0405214 2.40598,6.059429 0,0 z"/>
        <path d="m 155.31,27.708 c 5.92859,-6.421491 -6.41295,-3.025693 0,0 z"/>
        <path d="m 167.22,30.822 c -2.12679,-8.457657 -6.0772,3.632234 0,0 z"/>
        <path d="m 161.11,13.99 c -5.4972,4.718417 -4.5892,-4.6383408 0,0 z"/>
        <path d="m 176.31,28.757 c -4.35834,-5.761162 5.01793,-4.215695 0,0 z"/>
        <path d="m 174.59,15.797 c 3.53984,7.982031 5.36855,-4.597823 0,0 z"/>
        <path d="m 186.6,16.412 c -5.87161,-4.24363 3.54648,-5.486453 0,0 z"/>
        <path d="m 189.66,6.1792 c 4.36625,7.568257 4.8544,-5.1317486 0,0 z"/>
        <path d="m 203.71,8.9504 c -5.37971,4.849427 -4.70172,-4.526722 0,0 z"/>
        <path d="m 195.71,16.671 c 8.48702,-2.272783 -0.23322,7.035343 0,0 z"/>
        <path d="m 201.42,29.577 c 0.97359,-8.662515 6.50871,2.799531 0,0 z"/>
        <path d="m 219.24,30.281 c -5.86973,-4.245962 3.54852,-5.485074 0,0 z"/>
        <path d="m 223.09,18.944 c 6.90717,-2.25663 2.43496,6.031516 0,0 z"/>
        <path d="m 250.43,33.644 c 3.66615,-7.924052 5.29719,4.681546 0,0 z"/>
        <path d="m 266.15,34.592 c -1.55321,-7.034323 6.32874,-1.770425 0,0 z"/>
        <path d="m 238.92,27.066 c 7.25221,-4.929838 2.12506,6.715685 0,0 z"/>
        <path d="m 288.97,15.887 c -6.10965,3.910259 -3.88974,-5.227594 0,0 z"/>
        <path d="m 273.92,25.175 c -6.71367,-5.609967 5.96596,-3.822093 0,0 z"/>
        <path d="m 276.43,7.8005 c 5.27683,6.958381 -6.67725,2.397412 0,0 z"/>
        <path d="m 245.21,14.841 c -3.94042,6.05577 -5.71943,-3.181625 0,0 z"/>
        <path d="m 232.48,8.3182 c 3.36323,8.044347 -7.0675,0.6695076 0,0 z"/>
        <path d="m 283.81,26.24 c 3.62828,-7.942719 5.31757,4.655978 0,0 z"/>
        <path d="m 298.28,24.942 c 5.09238,5.136888 -4.40685,4.838771 0,0 z"/>
        <path d="m 321.86,10.75 c 4.47612,5.679065 5.4059,-3.6781394 0,0 z"/>
        <path d="m 332.86,3.6267 c -3.99656,6.0133119 5.26786,3.9047211 0,0 z"/>
        
      </g>
      <g
        id="lights-wires"
        className="wires"
        
      >
        {/* Wire across */}
        <path d="m 1.7227,11.747 c 6.3217789,-0.460941 14.545872,1.464878 11.9814,13.32274 9.098191,3.985677 24.489192,10.352627 27.0781,-3.1304 5.169109,-4.554797 6.389428,-17.9963597 15.3442,-6.2608 0.630955,15.171908 19.889001,14.733498 29.3345,7.60236 7.642371,-4.978051 10.816949,-10.543394 14.98492,-14.05604 13.25549,-6.7455654 6.81098,22.153546 22.02169,18.9752 6.19487,-8.602885 24.36903,-2.645878 23.91889,-16.9936 13.45214,-13.4908466 6.34959,17.232303 17.4778,15.564697 4.2128,-3.153456 15.74806,1.229063 13.6619,-8.856697 7.24373,-9.9408714 24.35972,-13.2168718 24.3702,0 -0.45134,14.207207 7.88995,1.572166 15.34419,8.944 7.13741,-8.855783 23.58794,-25.4258025 25.22288,-4.107038 3.69121,8.304826 25.4215,13.845446 27.12802,0.143338 5.16909,-4.554806 6.38943,-17.9963552 15.3442,-6.2608 0.63095,15.171908 19.889,14.733498 29.3345,7.60236 7.64237,-4.97805 10.81694,-10.543395 14.98493,-14.05604 13.2555,-6.7455706 6.81095,22.153565 22.02169,18.9752 6.19488,-8.602878 24.36902,-2.645894 23.9189,-16.9936 13.45216,-13.4908559 6.34958,17.232293 17.4778,15.564697 4.2128,-3.153456 15.74807,1.229063 13.6619,-8.856697 7.24373,-9.9408703 24.35972,-13.2168725 24.3702,0 -0.45134,14.207213 7.88996,1.572161 15.34421,8.944 7.7874,-4.322854 9.74219,-14.868194 18.62,-16.71417"/>
        <path d="m 464.67,11.1 c 5.02227,8.575351 11.98972,8.692306 21.07611,11.7805 6.37067,-5.524107 14.36682,-16.4743011 24.87105,-11.200825 0.79962,11.713703 22.21028,4.069215 11.1702,-0.542865 -3.30817,5.979249 -0.33367,11.594256 6.47929,11.54129"/>
      </g>
      <g
        id="lights-lightbulbs-1"
        className="bulbs bulbs--flash"
        
      >
        <g className={`bulbs-set1`}>
          {/* Red bulbs */}
          <ellipse cx="16.427" cy="12.245" />
          <ellipse cx="9.5193" cy="28.254" />
          <ellipse cx="45.217" cy="6.1344" />
          <ellipse cx="55.501" cy="27.809" />
          <ellipse cx="94.021" cy="22.721" />
          <ellipse cx="93.756" cy="7.7199" />
          <ellipse cx="178.57" cy="28.603" />
          <ellipse cx="141.08" cy="7.6941" />
          <ellipse cx="125.22" cy="18.515" />
          <ellipse cx="111.31" cy="30.374" />
          <ellipse cx="190.14" cy="3.6919" />
          <ellipse cx="203.46" cy="6.6565" />
          <ellipse cx="245.12" cy="13.525" />
          <ellipse cx="238.21" cy="29.534" />
          <ellipse cx="273.91" cy="7.4151" />
          <ellipse cx="284.56" cy="28.548" />
          <ellipse cx="322.71" cy="24.002" />
          <ellipse cx="322.45" cy="9.0005" />
          <ellipse cx="221.6" cy="29.711" />
          <ellipse cx="407.26" cy="29.884" />
          <ellipse cx="369.77" cy="8.9748" />
          <ellipse cx="353.91" cy="19.796" />
          <ellipse cx="340" cy="30.082" />
          <ellipse cx="418.83" cy="4.9725" />
          <ellipse cx="432.15" cy="7.9371" />
          <ellipse cx="450.3" cy="30.992" />
          <ellipse cx="381.93" cy="28.28" />
          <ellipse cx="153.39" cy="28.163" />
          <ellipse cx="487.5" cy="27.763" />
          <ellipse cx="498.24" cy="7.7087" />
          <ellipse cx="514.68" cy="21.07" />
        </g>
        <g className={`bulbs-set3`}>
          {/* Green bulbs */}
          <ellipse cx="22.539" cy="34.983" />
          <ellipse cx="60.139" cy="12.418" />
          <ellipse cx="107.01" cy="16.879" />
          <ellipse cx="67.177" cy="24.432" />
          <ellipse cx="155.32" cy="3.4955" />
          <ellipse cx="188.74" cy="15.839" />
          <ellipse cx="166.2" cy="32.869" />
          <ellipse cx="139.71" cy="27.401" />
          <ellipse cx="251.23" cy="36.264" />
          <ellipse cx="288.83" cy="13.699" />
          <ellipse cx="335.7" cy="18.159" />
          <ellipse cx="295.87" cy="25.713" />
          <ellipse cx="384.01" cy="4.7761" />
          <ellipse cx="417.43" cy="17.119" />
          <ellipse cx="394.89" cy="34.15" />
          <ellipse cx="368.4" cy="28.681" />
          <ellipse cx="4.0208" cy="6.855" />
          <ellipse cx="202.78" cy="31.553" />
          <ellipse cx="223.23" cy="21.192" />
          <ellipse cx="431.47" cy="32.834" />
          <ellipse cx="456.66" cy="16.33" />
          <ellipse cx="527.02" cy="27.494" />
          <ellipse cx="514.94" cy="10.278" />
          <ellipse cx="465.35" cy="6.1669" />
        </g>
        <g className={`bulbs-set2`}>
          {/* Yellow bulbs */}
          <ellipse cx="39.75" cy="34.458" />
          <ellipse cx="47.694" cy="23.832" />
          <ellipse cx="77.765" cy="20.119" />
          <ellipse cx="106.41" cy="2.4765" />
          <ellipse cx="116.26" cy="21.711" />
          <ellipse cx="160.53" cy="12.586" />
          <ellipse cx="148.41" cy="21.183" />
          <ellipse cx="124.32" cy="32.745" />
          <ellipse cx="175.19" cy="13.92" />
          <ellipse cx="194.93" cy="19.256" />
          <ellipse cx="230.43" cy="7.607" />
          <ellipse cx="268.44" cy="35.739" />
          <ellipse cx="276.38" cy="25.112" />
          <ellipse cx="306.46" cy="21.4" />
          <ellipse cx="335.1" cy="3.7572" />
          <ellipse cx="344.95" cy="22.991" />
          <ellipse cx="389.22" cy="13.866" />
          <ellipse cx="377.1" cy="22.464" />
          <ellipse cx="353.02" cy="34.026" />
          <ellipse cx="403.88" cy="15.2" />
          <ellipse cx="423.99" cy="19.814" />
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="469.2" cy="23.897" />
          <ellipse cx="496.18" cy="20.813" />
          <ellipse cx="527.53" cy="7.1948" />
        </g>
      </g>
      <g
        id="lights-lightbulbs-2"
        className="bulbs bulb-halo-effect"
        
      >
        <g>
          {/* Red bulbs */}
          <ellipse cx="16.427" cy="12.245" />
          <ellipse cx="45.217" cy="6.1344" />
          <ellipse cx="55.501" cy="27.809" />
          <ellipse cx="94.021" cy="22.721" />
          <ellipse cx="93.756" cy="7.7199" />
          <ellipse cx="178.57" cy="28.603" />
          <ellipse cx="141.08" cy="7.6941" />
          <ellipse cx="125.22" cy="18.515" />
          <ellipse cx="111.31" cy="30.374" />
          <ellipse cx="190.14" cy="3.6919" />
          <ellipse cx="203.46" cy="6.6565" />
          <ellipse cx="245.12" cy="13.525" />
          <ellipse cx="238.21" cy="29.534" />
          <ellipse cx="273.91" cy="7.4151" />
          <ellipse cx="284.56" cy="28.548" />
          <ellipse cx="322.71" cy="24.002" />
          <ellipse cx="322.45" cy="9.0005" />
          <ellipse cx="221.6" cy="29.711" />
          <ellipse cx="407.26" cy="29.884" />
          <ellipse cx="369.77" cy="8.9748" />
          <ellipse cx="353.91" cy="19.796" />
          <ellipse cx="340" cy="30.082" />
          <ellipse cx="418.83" cy="4.9725" />
          <ellipse cx="432.15" cy="7.9371" />
          <ellipse cx="450.3" cy="30.992" />
          <ellipse cx="381.93" cy="28.28" />
          <ellipse cx="153.39" cy="28.163" />
          <ellipse cx="487.5" cy="27.763" />
          <ellipse cx="498.24" cy="7.7087" />
          <ellipse cx="514.68" cy="21.07" />
        </g>
        <g>
          {/* Green bulbs */}
          <ellipse cx="22.539" cy="34.983" />
          <ellipse cx="60.139" cy="12.418" />
          <ellipse cx="107.01" cy="16.879" />
          <ellipse cx="67.177" cy="24.432" />
          <ellipse cx="155.32" cy="3.4955" />
          <ellipse cx="188.74" cy="15.839" />
          <ellipse cx="166.2" cy="32.869" />
          <ellipse cx="139.71" cy="27.401" />
          <ellipse cx="251.23" cy="36.264" />
          <ellipse cx="288.83" cy="13.699" />
          <ellipse cx="335.7" cy="18.159" />
          <ellipse cx="295.87" cy="25.713" />
          <ellipse cx="384.01" cy="4.7761" />
          <ellipse cx="417.43" cy="17.119" />
          <ellipse cx="394.89" cy="34.15" />
          <ellipse cx="368.4" cy="28.681" />
          <ellipse cx="4.0208" cy="6.855" />
          <ellipse cx="202.78" cy="31.553" />
          <ellipse cx="223.23" cy="21.192" />
          <ellipse cx="431.47" cy="32.834" />
          <ellipse cx="456.66" cy="16.33" />
          <ellipse cx="527.02" cy="27.494" />
          <ellipse cx="514.94" cy="10.278" />
          <ellipse cx="465.35" cy="6.1669" />
        </g>
        <g>
          {/* Yellow bulbs */}
          <ellipse cx="39.75" cy="34.458" />
          <ellipse cx="47.694" cy="23.832" />
          <ellipse cx="77.765" cy="20.119" />
          <ellipse cx="106.41" cy="2.4765" />
          <ellipse cx="116.26" cy="21.711" />
          <ellipse cx="160.53" cy="12.586" />
          <ellipse cx="148.41" cy="21.183" />
          <ellipse cx="124.32" cy="32.745" />
          <ellipse cx="175.19" cy="13.92" />
          <ellipse cx="194.93" cy="19.256" />
          <ellipse cx="230.43" cy="7.607" />
          <ellipse cx="268.44" cy="35.739" />
          <ellipse cx="276.38" cy="25.112" />
          <ellipse cx="306.46" cy="21.4" />
          <ellipse cx="335.1" cy="3.7572" />
          <ellipse cx="344.95" cy="22.991" />
          <ellipse cx="389.22" cy="13.866" />
          <ellipse cx="377.1" cy="22.464" />
          <ellipse cx="353.02" cy="34.026" />
          <ellipse cx="403.88" cy="15.2" />
          <ellipse cx="423.99" cy="19.814" />
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="469.2" cy="23.897" />
          <ellipse cx="496.18" cy="20.813" />
          <ellipse cx="527.53" cy="7.1948" />
        </g>
      </g>
      <g
        id="lights-bar-coverup"
        className="bar"
        
      >
        {/* Make the horizontal bar cover the wire as it wraps */}
        <rect x="9" y="11.747" width="20" height="4.9531" />
        <rect x="50" y="11.747" width="20" height="4.9531" />
        <rect x="100" y="11.747" width="20" height="4.9531" />
        <rect x="150" y="11.747" width="20" height="4.9531" />
        <rect x="195" y="11.747" width="20" height="4.9531" />
        <rect x="235" y="11.747" width="20" height="4.9531" />
        <rect x="278" y="11.747" width="20" height="4.9531" />
        <rect x="330" y="11.747" width="20" height="4.9531" />
        <rect x="380" y="11.747" width="20" height="4.9531" />
      </g>
    </svg>
    )
  }

  const topLightsTruncated = () => {
    return (<svg
      viewBox={viewboxSettings()}
      preserveAspectRatio="xMinYMin slice"
      className={`lights`}
      width={svgWidth}
      height={svgHeight}
    >
      <g id="lights-bar" className="bar" >
        {/* The horizontal bar */}
        <rect x="0" y="11.747" width="529.83" height="4.9531" />
      </g>
      <g
        id="lights-blub-sockets"
        className="sockets"
        
      >
        {/* Dark grey wires, bulb sockets */}
        <path d="m 21.623,32.689 c 3.666185,-7.924045 5.297135,4.68152 0,0 z"/>
        <path d="m 37.341,33.637 c -1.553205,-7.034308 6.328761,-1.770427 0,0 z"/>
        <path d="m 10.113,26.111 c 7.252163,-4.929964 2.125064,6.715959 0,0 z"/>
        <path d="m 60.165,14.932 c -6.109691,3.910262 -3.88966,-5.2276082 0,0 z"/>
        <path d="m 45.107,24.219 c -6.713661,-5.609953 5.965951,-3.822108 0,0 z"/>
        <path d="m 47.617,6.845 c 5.276825,6.958406 -6.677239,2.3973776 0,0 z"/>
        <path d="m 17.137,14.49 c -3.940523,6.055796 -5.719302,-3.181681 0,0 z"/>
        <path d="m 6.1109,7.9672 c 3.3632936,8.044412 -7.06751896,0.6694335 0,0 z"/>
        <path d="m 55.002,25.284 c 3.625878,-7.942157 5.320979,4.655073 0,0 z"/>
        <path d="m 69.469,23.987 c 5.092392,5.136927 -4.406882,4.838709 0,0 z"/>
        <path d="m 93.052,9.7947 c 4.476286,5.679056 5.405716,-3.6781828 0,0 z"/>
        <path d="m 104.05,2.6712 c -3.99657,6.0133125 5.26786,3.9047346 0,0 z"/>
        <path d="m 105.79,14.572 c 2.91727,-8.223548 5.70726,4.180344 0,0 z"/>
        <path d="m 116.36,19.706 c -4.6989,-5.499782 -5.25508,3.885918 0,0 z"/>
        <path d="m 111.23,27.795 c 5.83237,-6.525767 3.69858,6.00548 0,0 z"/>
        <path d="m 127.59,19.718 c 4.02459,7.739263 -6.98738,1.24935 0,0 z"/>
        <path d="m 122.7,31.295 c 0.56173,-7.180704 6.56949,0.112569 0,0 z"/>
        <path d="m 80.209,20.382 c 6.669603,5.661327 -5.99552,3.776242 0,0 z"/>
        <path d="m 91.501,22.365 c -5.669655,-6.647543 6.527746,-2.773154 0,0 z"/>
        <path d="m 137.69,27.623 c -4.87643,-5.338273 4.6027,-4.656627 0,0 z"/>
        <path d="m 141.57,10.278 c 6.9796,5.303263 2.47895,-6.5946877 0,0 z"/>
        <path d="m 147.56,19.477 c -7.6125,-4.362681 -1.59924,6.857949 0,0 z"/>
        <path d="m 153.79,3.2612 c -6.58941,3.0405214 2.40598,6.059429 0,0 z"/>
        <path d="m 155.31,27.708 c 5.92859,-6.421491 -6.41295,-3.025693 0,0 z"/>
        <path d="m 167.22,30.822 c -2.12679,-8.457657 -6.0772,3.632234 0,0 z"/>


      </g>
      <g
        id="lights-wires"
        className="wires"
        
      >
        {/* Wire across */}
        <path d="m 1.7227,11.747 c 6.3217789,-0.460941 14.545872,1.464878 11.9814,13.32274 9.098191,3.985677 24.489192,10.352627 27.0781,-3.1304 5.169109,-4.554797 6.389428,-17.9963597 15.3442,-6.2608 0.630955,15.171908 19.889001,14.733498 29.3345,7.60236 7.642371,-4.978051 10.816949,-10.543394 14.98492,-14.05604 13.25549,-6.7455654 6.81098,22.153546 22.02169,18.9752 6.19487,-8.602885 24.36903,-2.645878 23.91889,-16.9936 13.45214,-13.4908466 6.34959,17.232303 17.4778,15.564697 4.2128,-3.153456 15.74806,1.229063 13.6619,-8.856697 7.24373,-9.9408714 24.35972,-13.2168718 24.3702,0 -0.45134,14.207207 7.88995,1.572166 15.34419,8.944 7.13741,-8.855783 23.58794,-25.4258025 25.22288,-4.107038 3.69121,8.304826 25.4215,13.845446 27.12802,0.143338 5.16909,-4.554806 6.38943,-17.9963552 15.3442,-6.2608 0.63095,15.171908 19.889,14.733498 29.3345,7.60236 7.64237,-4.97805 10.81694,-10.543395 14.98493,-14.05604 13.2555,-6.7455706 6.81095,22.153565 22.02169,18.9752 6.19488,-8.602878 24.36902,-2.645894 23.9189,-16.9936 13.45216,-13.4908559 6.34958,17.232293 17.4778,15.564697 4.2128,-3.153456 15.74807,1.229063 13.6619,-8.856697 7.24373,-9.9408703 24.35972,-13.2168725 24.3702,0 -0.45134,14.207213 7.88996,1.572161 15.34421,8.944 7.7874,-4.322854 9.74219,-14.868194 18.62,-16.71417"/>
        <path d="m 464.67,11.1 c 5.02227,8.575351 11.98972,8.692306 21.07611,11.7805 6.37067,-5.524107 14.36682,-16.4743011 24.87105,-11.200825 0.79962,11.713703 22.21028,4.069215 11.1702,-0.542865 -3.30817,5.979249 -0.33367,11.594256 6.47929,11.54129"/>
      </g>
      <g
        id="lights-lightbulbs-1"
        className="bulbs bulbs--flash"
        
      >
        <g className={`bulbs-set1`}>
          {/* Red bulbs */}
          <ellipse cx="16.427" cy="12.245" />
          <ellipse cx="9.5193" cy="28.254" />
          <ellipse cx="45.217" cy="6.1344" />
          <ellipse cx="55.501" cy="27.809" />
          <ellipse cx="94.021" cy="22.721" />
          <ellipse cx="93.756" cy="7.7199" />
          <ellipse cx="111.31" cy="30.374" />
          <ellipse cx="125.22" cy="18.515" />
          <ellipse cx="141.08" cy="7.6941" />
          <ellipse cx="153.39" cy="28.163" />
          <ellipse cx="178.57" cy="28.603" />
          <ellipse cx="190.14" cy="3.6919" />
          <ellipse cx="203.46" cy="6.6565" />
          <ellipse cx="221.6" cy="29.711" />
          <ellipse cx="238.21" cy="29.534" />
          <ellipse cx="245.12" cy="13.525" />
        </g>
        <g className={`bulbs-set3`}>
          {/* Green bulbs */}
          <ellipse cx="4.0208" cy="6.855" />
          <ellipse cx="22.539" cy="34.983" />
          <ellipse cx="60.139" cy="12.418" />
          <ellipse cx="67.177" cy="24.432" />
          <ellipse cx="107.01" cy="16.879" />
          <ellipse cx="139.71" cy="27.401" />
          <ellipse cx="155.32" cy="3.4955" />
          <ellipse cx="166.2" cy="32.869" />
          <ellipse cx="188.74" cy="15.839" />
          <ellipse cx="202.78" cy="31.553" />
          <ellipse cx="223.23" cy="21.192" />
          <ellipse cx="251.23" cy="36.264" />
        </g>
        <g className={`bulbs-set2`}>
          {/* Yellow bulbs */}
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="39.75" cy="34.458" />
          <ellipse cx="47.694" cy="23.832" />
          <ellipse cx="77.765" cy="20.119" />
          <ellipse cx="106.41" cy="2.4765" />
          <ellipse cx="116.26" cy="21.711" />
          <ellipse cx="160.53" cy="12.586" />
          <ellipse cx="148.41" cy="21.183" />
          <ellipse cx="124.32" cy="32.745" />
          <ellipse cx="175.19" cy="13.92" />
          <ellipse cx="194.93" cy="19.256" />
          <ellipse cx="230.43" cy="7.607" />
          <ellipse cx="268.44" cy="35.739" />
        </g>
      </g>
      <g
        id="lights-lightbulbs-2"
        className="bulbs bulb-halo-effect"
        
      >
        <g>
          {/* Red bulbs */}
          <ellipse cx="16.427" cy="12.245" />
          <ellipse cx="45.217" cy="6.1344" />
          <ellipse cx="55.501" cy="27.809" />
          <ellipse cx="93.756" cy="7.7199" />
          <ellipse cx="94.021" cy="22.721" />
          <ellipse cx="111.31" cy="30.374" />
          <ellipse cx="141.08" cy="7.6941" />
          <ellipse cx="125.22" cy="18.515" />
          <ellipse cx="153.39" cy="28.163" />
          <ellipse cx="178.57" cy="28.603" />
          <ellipse cx="190.14" cy="3.6919" />
          <ellipse cx="203.46" cy="6.6565" />
          <ellipse cx="221.6" cy="29.711" />
          <ellipse cx="245.12" cy="13.525" />
          <ellipse cx="238.21" cy="29.534" />
          <ellipse cx="273.91" cy="7.4151" />

        </g>
        <g>
          {/* Green bulbs */}
          <ellipse cx="4.0208" cy="6.855" />
          <ellipse cx="22.539" cy="34.983" />
          <ellipse cx="60.139" cy="12.418" />
          <ellipse cx="67.177" cy="24.432" />
          <ellipse cx="107.01" cy="16.879" />
          <ellipse cx="139.71" cy="27.401" />
          <ellipse cx="155.32" cy="3.4955" />
          <ellipse cx="166.2" cy="32.869" />
          <ellipse cx="188.74" cy="15.839" />
          <ellipse cx="202.78" cy="31.553" />
          <ellipse cx="223.23" cy="21.192" />
          <ellipse cx="251.23" cy="36.264" />
        </g>
        <g>
          {/* Yellow bulbs */}
          <ellipse cx="5.709" cy="20.119" />
          <ellipse cx="39.75" cy="34.458" />
          <ellipse cx="47.694" cy="23.832" />
          <ellipse cx="77.765" cy="20.119" />
          <ellipse cx="106.41" cy="2.4765" />
          <ellipse cx="116.26" cy="21.711" />
          <ellipse cx="124.32" cy="32.745" />
          <ellipse cx="148.41" cy="21.183" />
          <ellipse cx="160.53" cy="12.586" />
          <ellipse cx="175.19" cy="13.92" />
          <ellipse cx="194.93" cy="19.256" />
          <ellipse cx="230.43" cy="7.607" />
          <ellipse cx="268.44" cy="35.739" />
        </g>
      </g>
      <g
        id="lights-bar-coverup"
        className="bar"
        
      >
        {/* Make the horizontal bar cover the wire as it wraps */}
        <rect x="9" y="11.747" width="20" height="4.9531" />
        <rect x="50" y="11.747" width="20" height="4.9531" />
        <rect x="100" y="11.747" width="20" height="4.9531" />
        <rect x="150" y="11.747" width="20" height="4.9531" />
        <rect x="195" y="11.747" width="20" height="4.9531" />
        <rect x="235" y="11.747" width="20" height="4.9531" />
      </g>
    </svg>
    )
  }

  const sideLights = () => {
    return (<svg
      viewBox={viewboxSettings()}
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
          {topLights()}
          {sideLights()}
        </Breakpoint>
        <Breakpoint small down>
        {topLightsTruncated()}
        </Breakpoint>
      </BreakpointProvider>
      )
}


export default Lights