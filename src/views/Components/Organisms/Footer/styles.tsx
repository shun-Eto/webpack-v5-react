import React from "react";

import {
  createStyles,
  makeStyles,
  Toolbar,
  ToolbarProps,
  withStyles
} from "@material-ui/core";

interface StyledToolbarProps extends ToolbarProps {
  height?: number;
}
export const StyledToolbar = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: StyledToolbarProps) => {
  const { height } = props;
  const classes = makeStyles(theme =>
    createStyles({
      Toolbar: {
        height
      }
    })
  )();
  return <Toolbar {...props} className={classes.Toolbar} />;
});
