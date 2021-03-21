import * as React from "react";

import { StyledToolbar } from "./styles";

export interface FooterProps {
  height?: number;
}
const Footer: React.FC<FooterProps> = props => {
  const { height } = props;
  return <StyledToolbar height={height}>Footer</StyledToolbar>;
};

export default Footer;
