import * as React from "react";

import { Footer } from "./styles";

interface ComponentProps {
  componentRef?: React.RefObject<HTMLDivElement>;
}
const Component: React.FC<ComponentProps> = props => (
  <Footer ref={props.componentRef} color="secondary">
    Footer
  </Footer>
);

export default Component;
