import styled from "styled-components";

import { Toolbar, ToolbarProps } from "@material-ui/core";

interface FooterProps extends ToolbarProps {}
export const Footer = styled(Toolbar)<FooterProps>(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 50,
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary
}));
