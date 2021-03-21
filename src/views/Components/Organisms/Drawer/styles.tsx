import styled from "styled-components";

//  types
import { DrawerProps } from ".";

interface WrapperProps extends DrawerProps {}
export const Wrapper = styled.div<WrapperProps>(
  ({ open, minWidth, maxWidth, left, right, theme }) => {
    const width = open ? maxWidth : minWidth;
    return {
      width,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      position: "absolute",
      height: "100%",
      backgroundColor: theme.colorPicker("red", { code: "100" }),
      left: left ? 0 : "unset",
      right: right ? 0 : "unset"
    };
  }
);
