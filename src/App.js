import { StyledContainer } from "./App.styles.jsx";
import { themeOptions } from "./themes";
import { Container, Grid, ThemeProvider } from "@mui/material";
import { ReactComponent as LogoTitle } from "./images/logo.svg";
import TipInput from "./input/input.component.jsx";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <StyledContainer maxWidth="lg">
        <Grid container>
          <Grid item container xs={12} justifyContent="center">
            <LogoTitle />
          </Grid>
          <Grid container item>
            <TipInput />
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
