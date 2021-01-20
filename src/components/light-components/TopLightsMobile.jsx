import React from 'react';

const TopLightsMobile = ({viewboxSettings, svgWidth, svgHeight}) => {
    return (<svg
      viewBox={viewboxSettings}
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


export default TopLightsMobile;