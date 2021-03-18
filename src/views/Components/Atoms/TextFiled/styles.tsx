import { TextField, TextFieldProps } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";
import React from "react";

export const StyledTextFiled = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: TextFieldProps) => <TextField {...props} />);
