import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SearchIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 22-2-2m1-8.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z"
    />
  </Svg>
)
export default SearchIcon