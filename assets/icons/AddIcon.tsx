import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AddIcon = (props: SvgProps) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.15}
      d="M15 19.546A4.546 4.546 0 0 1 19.546 15h20.909A4.546 4.546 0 0 1 45 19.546v20.909A4.546 4.546 0 0 1 40.455 45h-20.91A4.546 4.546 0 0 1 15 40.455v-20.91Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 30h40M30 10v40"
    />
  </Svg>
)
export default AddIcon