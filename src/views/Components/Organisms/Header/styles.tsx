import React from "react";

//  mui components
import {
  AppBar,
  AppBarProps,
  createStyles,
  makeStyles,
  Toolbar,
  ToolbarProps,
  withStyles
} from "@material-ui/core";

export const StyledAppbar = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: AppBarProps) => <AppBar {...props} />);

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
