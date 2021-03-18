import React from "react";

//  providers
import Router from "./Router";

//  providers
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider as MuiStylesProvider
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ReduxProvider from "./Redux";

//  styles
import { muiTheme, origTheme } from "~assets/styles/theme";

const Providers: React.FC = props => {
  return (
    <ReduxProvider>
      <MuiThemeProvider theme={{ ...muiTheme, ...origTheme }}>
        <MuiStylesProvider injectFirst>
          <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
            <Router>{props.children}</Router>
          </StyledThemeProvider>
        </MuiStylesProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
