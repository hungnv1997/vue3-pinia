import * as React from "react";
import { useState } from "react";
interface Props {
  children: React.ReactNode;
}
import ReactIcon from "../assets/react.svg";
import SvgIcon from "../components/SvgIcon";
const AuthLayout: React.FunctionComponent<Props> = (props: Props) => {
  const [first, setfirst] = useState("aaaaa");
  return (
    <>
      <SvgIcon
        iconName="react"
        svgProp={{
          className: "logo",
          width: 100,
          height: 100,
          fill: "#61dafb",
        }}
      />
      <header>Head</header>
      <div id="page-content-wrapper">{props.children}</div>
    </>
  );
};
export default AuthLayout;
