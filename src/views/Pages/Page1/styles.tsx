import React from "react";

import {
  Button,
  ButtonProps,
  createStyles,
  withStyles
} from "@material-ui/core";

interface TestProps extends ButtonProps {}
export const Test = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("black")
    }
  })
)((props: TestProps) => <Button {...props} />);
