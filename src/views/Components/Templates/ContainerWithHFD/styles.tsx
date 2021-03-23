import React from "react";
import styled from "styled-components";

//  lib components
import { Container, createStyles, makeStyles } from "@material-ui/core";

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

interface StyledContainerProps {
  header?: HeaderProps;
  drawer: DrawerProps;
}
export const StyledContainer: React.FC<StyledContainerProps> = props => {
  const { drawer, header } = props;
  const { open, maxWidth, minWidth, left, right } = drawer;
  const width = open ? maxWidth : minWidth;
  const classes = makeStyles(theme =>
    createStyles({
      Container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...theme.scrollVisible({ y: true }),
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
  return (
    <Container className={classes.Container}>
      <React.Fragment>{props.children}</React.Fragment>
    </Container>
  );
};

export const Main = styled.main(({ theme }) => {
  return {
    flexGrow: 1
  };
});
