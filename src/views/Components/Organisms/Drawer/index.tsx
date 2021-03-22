import React from "react";

//  styled components
import {
  Wrapper,
  MainMenu,
  ThirdMenu,
  StyledListItem,
  StyledDivider
} from "./styles";

//  mui components
import { List } from "@material-ui/core";

//  types
import { ListElementType } from "~@types/component";

export interface DrawerProps {
  open?: boolean;
  minWidth?: number;
  maxWidth?: number;
  left?: boolean;
  right?: boolean;
  menu?: {
    first?: ListElementType<string>[];
    second?: ListElementType<string>[];
  };
  handleOpenBtnClicked?: () => void;
}
export const initDrawerProps: DrawerProps = {
  minWidth: 60,
  maxWidth: 200,
  left: true
};
const Drawer: React.FC<DrawerProps> = props => {
  const { menu } = props;
  return (
    <Wrapper {...props}>
      {menu?.first && (
        <React.Fragment>
          <MainMenu>
            <List>
              {menu.first.map((item, i) => (
                <StyledListItem key={i} item={item} />
              ))}
            </List>
          </MainMenu>
          <StyledDivider />
        </React.Fragment>
      )}
      {menu?.second && (
        <React.Fragment>
          <MainMenu>
            <List>
              {menu.second.map((item, i) => (
                <StyledListItem key={i} item={item} />
              ))}
            </List>
          </MainMenu>
          <StyledDivider />
        </React.Fragment>
      )}
      <ThirdMenu>Third</ThirdMenu>
    </Wrapper>
  );
};

export default Drawer;
