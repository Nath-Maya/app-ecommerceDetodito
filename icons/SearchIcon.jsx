import React from "react"
import { Svg, G, Path, Defs, ClipPath, Circle } from "react-native-svg"


export const SearchIcon = ({size=24}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Circle
        cx={10.5}
        cy={10.5}
        r={6.5}
        stroke="#000"
        strokeLinejoin="round"
      />
      <Path
        fill="#000"
        d="M19.646 20.354a.5.5 0 0 0 .708-.708l-.708.708Zm.708-.708-5-5-.708.708 5 5 .708-.708Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)