import { StyledContainer } from "./App.styles.jsx";
import { Container, Grid } from "@mui/material";
import { ReactComponent as LogoTitle } from "./images/logo.svg";

function App() {
  return (
    <StyledContainer maxWidth="lg">
      <Grid container>
        <Grid item container xs={12} justifyContent="center">
          <LogoTitle />
        </Grid>
        <Grid container item></Grid>
      </Grid>
    </StyledContainer>
  );
}

export default App;
