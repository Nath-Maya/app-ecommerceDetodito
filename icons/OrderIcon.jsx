import React from "react"
import { Svg } from "react-native-svg"


export const OrderIcon = ({size=30}) => (
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
      d="M10 1.5 12.5 4 15 6.5m-5-5H3v16h12v-11m-5-5v5h5"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      d="M17 6.5 19.5 9l2.5 2.5m-5-5v5h5m-5-5h-3m8 5v11H10v-5"
    />
  </Svg> 
)