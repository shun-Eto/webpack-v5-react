import CreateFontSize from "./CreateFontSize";
import CreateColorPicker from "./CreateColorPicker";
import CreateScrollVisible from "./CreateScrollVisible";

//  mui
import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core";

//  class
const createFontSize = new CreateFontSize();
const createColorPicker = new CreateColorPicker();
const createScrollVisible = new CreateScrollVisible();

interface OrigTheme {
  fontSize: typeof createFontSize.fontSize;
  colorPicker: typeof createColorPicker.colorPicker;
  scrollVisible: typeof createScrollVisible.scrollVisible;
}
const origTheme: OrigTheme = {
  fontSize: key => createFontSize.fontSize(key),
  colorPicker: (color, option) => createColorPicker.colorPicker(color, option),
  scrollVisible: visible => createScrollVisible.scrollVisible(visible)
};

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: "rgba(40,40,40,1)" },
    secondary: { main: "rgba(55,5,5,1)" },
    text: { primary: "rgba(240,242,236,1)", secondary: "rgba(240,242,236,1)" }
  }
});

export type Theme = OrigTheme & MuiTheme;
export { muiTheme, origTheme };

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends OrigTheme {}
}
