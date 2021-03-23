import React from "react";

//  lib components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";

//  types
import { ListElementType } from "~@types/component";
import { useSelector } from "react-redux";
import { StoreState } from "~redux/store/reducer";
import { WhiteSpaceProperty } from "@material-ui/styles/node_modules/csstype";

/**
 * @name StyledListItem
 */
interface StyledListItemProps {
  item: ListElementType<string>;
  ListItemTextProps?: {
    whiteSpace?: WhiteSpaceProperty;
  };
}
export const StyledListItem = (props: StyledListItemProps) => {
  const { item, ListItemTextProps } = props;
  const lang = useSelector((state: StoreState) => state.environment.data.lang);
  const classes = makeStyles(theme =>
    createStyles({
      item: {},
      icon: {},
      text: { whiteSpace: ListItemTextProps?.whiteSpace || "nowrap" }
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
