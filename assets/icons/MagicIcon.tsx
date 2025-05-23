import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MagicIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#ffffff50"
      d="M14.996.656a.642.642 0 0 1 1.205 0l.921 2.49a.642.642 0 0 0 .38.38l2.49.92c.56.208.56.998 0 1.205l-2.49.922a.642.642 0 0 0-.38.38l-.92 2.49a.642.642 0 0 1-1.206 0l-.92-2.49a.642.642 0 0 0-.38-.38l-2.49-.922a.642.642 0 0 1 0-1.204l2.49-.922a.642.642 0 0 0 .38-.38l.92-2.49ZM5.933 7.052c.276-.746 1.33-.746 1.606 0l1.228 3.32c.087.234.272.42.506.506l3.32 1.228c.746.276.746 1.33 0 1.607l-3.32 1.228a.856.856 0 0 0-.506.506l-1.228 3.32c-.276.745-1.33.745-1.606 0l-1.229-3.32a.856.856 0 0 0-.506-.506l-3.32-1.229c-.745-.275-.745-1.33 0-1.606l3.32-1.228a.856.856 0 0 0 .506-.506l1.229-3.32Z"
    />
  </Svg>
);
export default MagicIcon;
