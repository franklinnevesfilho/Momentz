import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChatIcon = (props: SvgProps) => (
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
      strokeWidth={2}
      d="M19 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7.826a2 2 0 0 0 2 2h1.565V20l4.174-4.174H11m5.163 2.565L18.772 21v-2.609H19a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v3.391a2 2 0 0 0 2 2h3.163Z"
    />
  </Svg>
)
export default ChatIcon