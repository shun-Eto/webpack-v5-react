import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core";
import CreateColorPicker from "./CreateColorPicker/Class";
import CreateFontSize from "./CreateFontSize/Class";

const createCP = new CreateColorPicker();
const createFS = new CreateFontSize();

interface OrigTheme {
  fontSize: typeof createFS.fontSize;
  colorPicker: typeof createCP.colorPicker;
}

const origTheme: OrigTheme = {
  fontSize: key => createFS.fontSize(key),
  colorPicker: (color, option) => createCP.colorPicker(color, option)
};

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(40,40,40,1)"
    },
    secondary: {
      main: "rgba(55,5,5,1)"
    },
    text: {
      primary: "rgba(240,242,236,1)",
      secondary: "rgba(240,242,236,1)"
    }
  }
});

export type Theme = OrigTheme & MuiTheme;

//  extends styled component theme interface
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

//  extends mui theme interface
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends OrigTheme {}
}
export { muiTheme, origTheme };
