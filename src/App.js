import { StyledContainer, StyledCard } from "./App.styles.jsx";
import { themeOptions } from "./themes";
import { Grid, ThemeProvider } from "@mui/material";
import { ReactComponent as LogoTitle } from "./images/logo.svg";
import TipInput from "./input/input.component.jsx";
import ResultsOutput from "./results/results.component.jsx";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <StyledContainer maxWidth="lg">
        <Grid container rowSpacing={10}>
          <Grid item container xs={12} justifyContent="center">
            <LogoTitle />
          </Grid>
          <Grid container item justifyContent="center">
            <StyledCard>
              <Grid container columnSpacing={6}>
                <TipInput />
                <ResultsOutput />
              </Grid>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
