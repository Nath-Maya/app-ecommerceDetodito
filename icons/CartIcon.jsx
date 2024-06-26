import Svg, { Path, G, Circle, Defs, ClipPath } from 'react-native-svg'
import React from 'react'

export const CartIcon = ({color}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        stroke="#000"
        strokeLinejoin="round"
        d="M5.333 6h14.534a1 1 0 0 1 .992 1.124l-.75 6a1 1 0 0 1-.992.876H8"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 4h2.234a1 1 0 0 1 .965.74l3.102 11.52a1 1 0 0 0 .965.74H19"
      />
      <Circle cx={10} cy={20} r={1} stroke="#000" strokeLinejoin="round" />
      <Circle cx={17.5} cy={20} r={1} stroke="#000" strokeLinejoin="round" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
) 

