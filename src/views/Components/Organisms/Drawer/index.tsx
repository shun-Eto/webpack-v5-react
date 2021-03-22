import React from "react";

import { Wrapper } from "./styles";
export interface DrawerProps {
  open: boolean;
  minWidth?: number;
  maxWidth?: number;
  left?: boolean;
  right?: boolean;
  handleOpenBtnClicked?: () => void;
}
const Drawer: React.FC<DrawerProps> = props => {
  return <Wrapper {...props} />;
};

export default Drawer;
