import * as React from "react";

//  atomic components
import { DrawerProps } from "~views/Components/Organisms/Drawer";

//  styled components
import {
  StyledAppbar,
  StyledToolbar,
  DrawerAction,
  Logo,
  Wrapper,
  Actions,
  Search
} from "./styles";

//  assets
import Img_Pic1 from "~assets/images/pic1.png";

export interface HeaderProps {
  height?: number;
  drawer?: DrawerProps;
}
const Header: React.FC<HeaderProps> = props => {
  const { height, drawer } = props;
  return (
    <StyledAppbar>
      <StyledToolbar height={height}>
        {drawer?.left && <DrawerAction drawer={drawer} />}
        <Wrapper>
          <Logo src={Img_Pic1} />
          <Search />
          <Actions />
        </Wrapper>
        {drawer?.right && <DrawerAction drawer={drawer} />}
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Header;
