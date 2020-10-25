import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Market = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M21.9 8.89l-1.05-4.37A1.964 1.964 0 0018.94 3H5.05a1.964 1.964 0 00-1.9 1.52L2.1 8.89a3.375 3.375 0 00.62 2.88 3.834 3.834 0 00.28.29V19a2.006 2.006 0 002 2h14a2.006 2.006 0 002-2v-6.94a3.7 3.7 0 00.28-.28 3.364 3.364 0 00.62-2.89zm-2.99-3.9l1.05 4.37a1.356 1.356 0 01-.25 1.17 1.173 1.173 0 01-.94.47 1.25 1.25 0 01-1.21-1.14L16.98 5zM13 5h1.96l.54 4.52a1.344 1.344 0 01-.33 1.07 1.193 1.193 0 01-.95.41A1.272 1.272 0 0113 9.69zM8.49 9.52L9.04 5H11v4.69A1.285 1.285 0 019.71 11a1.2 1.2 0 01-.89-.41 1.421 1.421 0 01-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86A1.257 1.257 0 015.23 11a1.151 1.151 0 01-.93-.47 1.322 1.322 0 01-.26-1.17zM5 19v-6.03a1.81 1.81 0 00.23.03 3.129 3.129 0 002.24-.95 3.216 3.216 0 002.31.95 3.17 3.17 0 002.23-.93 3.278 3.278 0 002.29.93 3.175 3.175 0 002.24-.95 3.129 3.129 0 002.24.95 1.81 1.81 0 00.23-.03V19z"
        fill="#00168d"
      />
    </Svg>
  );
};

export default Market;
