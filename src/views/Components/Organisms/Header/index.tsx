import * as React from "react";

//  styled components
import { StyledAppbar, StyledToolbar } from "./styles";

export interface HeaderProps {
  height?: number;
}
const Header: React.FC<HeaderProps> = props => {
  const { height } = props;
  return (
    <StyledAppbar>
      <StyledToolbar height={height}>Header</StyledToolbar>
    </StyledAppbar>
  );
};

export default Header;
