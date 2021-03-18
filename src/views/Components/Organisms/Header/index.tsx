import * as React from "react";

import { Header } from "./styles";

import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface ComponentProps {
  componentRef?: React.RefObject<HTMLDivElement>;
  style?: CSSProperties;
}
const Component: React.FC<ComponentProps> = props => {
  return (
    <Header ref={props.componentRef} style={props.style}>
      Header
    </Header>
  );
};

export default Component;
