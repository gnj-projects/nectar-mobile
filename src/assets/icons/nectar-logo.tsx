import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const NectarLogo = (props: SvgProps): JSX.Element => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.853 4.807c.242-2.162-1.29-4.114-3.452-4.356a3.913 3.913 0 0 0-4.355 3.452c-.29 2.468.113 5.42.629 8.453 1.436.436 2.823 1.065 4.113 1.807 1.388-3.275 2.743-6.517 3.065-9.356Zm15.18 9.485c-.855-2-3.178-2.904-5.178-2.049-2.63 1.146-5.356 3.388-8.098 5.695 1.032 1.016 2 2.161 2.823 3.403 3.113-.387 6.098-.855 8.404-1.855 2-.887 2.92-3.21 2.049-5.194Zm-6.63-10.55c-1.742-1.29-4.21-.936-5.5.807-1.969 2.645-3.292 6.597-4.727 10.453.484.322.935.645 1.37.984.324.258.662.532 1.001.806 3.29-2.484 6.71-4.904 8.679-7.55a3.938 3.938 0 0 0-.823-5.5Z"
      fill="#fff"
    />
    <Path
      d="M34.918 35.327a46.687 46.687 0 0 1-3.871 3.694 149.796 149.796 0 0 1-5.856 4.823c-2.13-1.306-3.662-1.968-3.92-1.629-.226.307.661 1.436 2.258 2.904-5.355 3.984-11.017 7.5-17.099 10.388-.952.452-1.952.775-2.936 1.13-.258.096-.532.096-.645.112-1.549.178-2.016-.242-1.952-1.661.194-4.42 1.565-8.566 2.984-12.695.388-1.13.79-2.259 1.21-3.388 2.146 1.307 3.678 1.984 3.936 1.645.275-.37-1.016-1.855-3.178-3.71 1.549-4 3.275-7.936 5.308-11.711 4.065 3.016 7.678 5 8.081 4.452.404-.548-2.58-3.468-6.694-6.517l-.178-.129a70.12 70.12 0 0 1 2.243-3.597c.984-1.484 2.194-2.84 3.387-4.162 1.597-1.758 3.662-2.355 5.969-1.84 7.388 1.646 12.518 5.889 14.938 13.164.483 1.484.048 2.936-.71 4.275a21.474 21.474 0 0 1-1.71 2.565c-3.904-2.855-7.291-4.694-7.679-4.178-.37.516 2.323 3.178 6.114 6.065Z"
      fill="#fff"
    />
  </Svg>
);

const NectarLogoSVG = memo(NectarLogo);
export { NectarLogoSVG };
