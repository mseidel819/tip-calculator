import { useState } from "react";

import { StyledContainer, StyledCard } from "./App.styles.jsx";
import { themeOptions } from "./themes";
import { Grid, ThemeProvider } from "@mui/material";
import { ReactComponent as LogoTitle } from "./images/logo.svg";
import TipInput from "./input/input.component.jsx";
import ResultsOutput from "./results/results.component.jsx";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [percent, setPercent] = useState(0);

  const onBillChange = (e) => {
    const billInput = e.target.value;
    setBill(billInput);
  };

  const percentHandler = (num) => {
    setPercent(num);
  };

  const onPeopleChange = (e) => {
    const peopleInput = e.target.value;
    setPeople(peopleInput);
  };

  const resetHandler = () => {
    setBill(0);
    setPeople(0);
    setPercent(0);
    document.getElementById("input-to-clear1").value = "";
    document.getElementById("input-to-clear2").value = "";
  };
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
                <TipInput
                  percentHandler={percentHandler}
                  onBillChange={onBillChange}
                  percent={percent}
                  onPeopleChange={onPeopleChange}
                  people={people}
                  bill={bill}
                />
                <ResultsOutput
                  bill={bill}
                  people={people}
                  percent={percent}
                  resetHandler={resetHandler}
                />
              </Grid>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
