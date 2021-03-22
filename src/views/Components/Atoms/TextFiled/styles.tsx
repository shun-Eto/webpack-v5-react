import React from "react";

//  mui components
import {
  Grow,
  IconButton,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Paper,
  TextField,
  TextFieldProps
} from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";

//  types
import { ListItemProps } from "~@types/component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @name StyledTextFiled
 */
export const StyledTextFiled = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: TextFieldProps) => <TextField {...props} />);

/**
 * @name SearchInput
 */
export interface SearchInputProps {
  items: ListItemProps<string>[];
}
export const SearchInput = (props: SearchInputProps) => {
  const classes = makeStyles(theme =>
    createStyles({
      paper: {
        padding: theme.spacing(0.5, 1.5),
        position: "relative"
      },
      input: {
        color: theme.colorPicker("black")
      },
      iconBtn: {},
      listWrapper: {
        position: "absolute",
        width: "100%",
        left: 0
      },
      Grow: {}
    })
  )();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBlur = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className={classes.paper}>
      <InputBase
        placeholder="Search..."
        className={classes.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <IconButton size="small">
        <FontAwesomeIcon icon={["fas", "search"]} />
      </IconButton>
      <div className={classes.listWrapper}>
        <Grow in={open}>
          <List component="nav" style={{ backgroundColor: "white" }}>
            <ListItem button>Test</ListItem>
            <ListItem button>Test</ListItem>
          </List>
        </Grow>
      </div>
    </Paper>
  );
};
