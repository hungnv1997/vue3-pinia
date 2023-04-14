import * as React from "react";
import { useState } from "react";
interface Props {
  children: React.ReactNode;
}
const AuthLayout: React.FunctionComponent<Props> = (props: Props) => {
  const [first, setfirst] = useState("aaaaa");
  return (
    <>
      <header>Head</header>
      <div id="page-content-wrapper">{props.children}</div>
    </>
  );
};
export default AuthLayout;
