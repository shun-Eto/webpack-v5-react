import React from "react";
import styled from "styled-components";

//  lib components
import {
  Container,
  ContainerProps,
  createStyles,
  makeStyles,
  withStyles
} from "@material-ui/core";

export const Wrapper = styled.div(({ theme }) => {
  return {
    position: "fixed",
    height: "100%",
    width: "100%",
    backgroundColor: theme.colorPicker("white")
  };
});

interface StyledContainerProps extends ContainerProps {
  header?: {
    height?: number;
  };
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
  const { header } = props;
  const classes = makeStyles(theme =>
    createStyles({
      Container: {
        paddingTop: header?.height
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
