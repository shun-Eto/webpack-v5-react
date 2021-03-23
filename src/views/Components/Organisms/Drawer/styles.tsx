import React from "react";
import styled from "styled-components";

//  hooks

//  lib components
import {
  createStyles,
  Divider,
  DividerProps,
  withStyles
} from "@material-ui/core";

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
      left: left ? 0 : "unset",
      right: right ? 0 : "unset",
      backgroundColor: theme.colorPicker("black"),
      color: theme.colorPicker("white"),
      display: "flex",
      flexDirection: "column"
    };
  }
);

export const StyledDivider = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("white")
    }
  })
)((props: DividerProps) => <Divider {...props} />);
