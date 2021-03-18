import styled from "styled-components";

import { AppBar, AppBarProps } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface HeaderProps extends AppBarProps {
  style?: CSSProperties;
}
export const Header = styled(AppBar)<HeaderProps>(({ style, theme }) => ({
  height: 55,
  width: "100%",
  padding: theme.spacing(1),
  position: "absolute",
  top: 0,
  left: 0
}));
