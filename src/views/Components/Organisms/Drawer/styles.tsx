import React from "react";
import styled from "styled-components";

//  hooks

//  lib components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createStyles,
  Divider,
  DividerProps,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  withStyles
} from "@material-ui/core";

//  types
import { DrawerProps } from ".";
import { ListElementType } from "~@types/component";
import { useSelector } from "react-redux";
import { StoreState } from "~redux/store/reducer";

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

export const MainMenu = styled.div(({ theme }) => {
  return {
    width: "100%",
    overflow: "hidden"
  };
});

export const SecondMenu = styled.div(({ theme }) => {
  return {};
});

export const ThirdMenu = styled.div(({ theme }) => {
  return {};
});

interface StyledListItemProps {
  item: ListElementType<string>;
}
export const StyledListItem = (props: StyledListItemProps) => {
  const { item } = props;
  const lang = useSelector((state: StoreState) => state.environment.data.lang);
  const classes = makeStyles(theme =>
    createStyles({
      item: {},
      icon: {},
      text: { whiteSpace: "nowrap" }
    })
  )();
  const label = typeof item.label === "string" ? item.label : item.label[lang];

  return (
    <ListItem button>
      <ListItemIcon className={classes.icon}>
        {item.faIcon && (
          <FontAwesomeIcon
            icon={item.faIcon}
            color="white"
            fixedWidth
            size="lg"
          />
        )}
      </ListItemIcon>
      <ListItemText className={classes.text}>{label}</ListItemText>
    </ListItem>
  );
};

export const StyledDivider = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("white")
    }
  })
)((props: DividerProps) => <Divider {...props} />);
