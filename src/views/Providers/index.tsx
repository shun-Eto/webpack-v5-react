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
import ErrorProvider from "./Error";

//  styles
import { muiTheme, origTheme } from "~assets/styles/theme";

const Providers: React.FC = props => {
  return (
    <Router>
      <ReduxProvider>
        <MuiThemeProvider theme={{ ...muiTheme, ...origTheme }}>
          <MuiStylesProvider injectFirst>
            <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
              <ErrorProvider>{props.children}</ErrorProvider>
            </StyledThemeProvider>
          </MuiStylesProvider>
        </MuiThemeProvider>
      </ReduxProvider>
    </Router>
  );
};

export default Providers;
