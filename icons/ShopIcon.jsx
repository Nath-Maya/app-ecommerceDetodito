import Svg, { Path } from 'react-native-svg'
import React from 'react'

export const ShopIcon = ({size = 30}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path fill="#fff" d="M0 0h24v24H0z" />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      d="M9 9H5.18a1 1 0 0 0-.986 1.164l1.667 10a1 1 0 0 0 .986.836h10.306a1 1 0 0 0 .986-.836l1.667-10A1 1 0 0 0 18.82 9H15M9 9h6M9 9 8 4h8l-1 5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 11 15 19M7.5 11 9 19M12 11v8"
    />
  </Svg>
)