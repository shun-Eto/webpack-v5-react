import React from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colorPicker("black")
}));

interface StyledMuiButtonProps extends ButtonProps {}
export const StyledMuiButton = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: StyledMuiButtonProps) => <Button {...props} />);
