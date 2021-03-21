import React from "react";
import styled from "styled-components";

//  mui components
import {
  Container,
  ContainerProps,
  createStyles,
  makeStyles,
  withStyles
} from "@material-ui/core";

//  types
import { DrawerProps } from "~views/Components/Organisms/Drawer";
import { HeaderProps } from "../../Organisms/Header";

export const Wrapper = styled.div(({ theme }) => {
  return {
    position: "fixed",
    height: "100%",
    width: "100%",
    backgroundColor: theme.colorPicker("white")
  };
});

interface StyledContainerProps extends ContainerProps {
  header?: HeaderProps;
  drawer: DrawerProps;
}
export const StyledContainer = withStyles(theme =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      ...theme.scrollVisible({ y: true })
    }
  })
)((props: StyledContainerProps) => {
  const { header, drawer } = props;
  const { open, maxWidth, minWidth, left, right } = drawer;
  const width = open ? maxWidth : minWidth;
  const classes = makeStyles(theme =>
    createStyles({
      Container: {
        paddingTop: header?.height,
        paddingLeft: left ? width : 0,
        paddingRight: right ? width : 0,
        transition: theme.transitions.create("padding", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      }
    })
  )();
  return <Container {...props} className={classes.Container} />;
});

export const Main = styled.main(({ theme }) => {
  return {
    flexGrow: 1
  };
});
