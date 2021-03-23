import React from "react";

//  styled components
import { Wrapper, StyledDivider } from "./styles";

//  atomic components
import { StyledListItem } from "~views/Components/Atoms/ListItem";

//  lib components
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
          <List>
            {menu.first.map((item, i) => (
              <StyledListItem key={i} item={item} />
            ))}
          </List>
          <StyledDivider />
        </React.Fragment>
      )}
      {menu?.second && (
        <React.Fragment>
          <List>
            {menu.second.map((item, i) => (
              <StyledListItem key={i} item={item} />
            ))}
          </List>
          <StyledDivider />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default Drawer;
