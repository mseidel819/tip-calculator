import { ChangeEvent, useState } from "react";
import React from "react";
import { StyledContainer, StyledCard } from "./App.styles";
import { themeOptions } from "./themes";
import { Grid, ThemeProvider } from "@mui/material";
import { ReactComponent as LogoTitle } from "./images/logo.svg";
import TipInput from "./input/input.component";
import ResultsOutput from "./results/results.component";
import { render } from "@testing-library/react";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const onBillChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const billInput = e.target.value;
    setBill(+billInput);
  };

  const percentHandler = (num: number) => {
    setPercent(num);
  };

  const onPeopleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const peopleInput = e.target.value;
    setPeople(+peopleInput);
    setHasEntered(true);
  };

  const customHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setPercent(+amount);
  };

  const input1 = document.getElementById("input-to-clear1") as HTMLInputElement;
  const input2 = document.getElementById("input-to-clear2") as HTMLInputElement;
  const input3 = document.getElementById("input-to-clear3") as HTMLInputElement;

  const resetHandler = () => {
    setBill(0);
    setPeople(0);
    setPercent(0);
    input1.value = "";
    input2.value = "";
    input3.value = "";
  };

  return (
    <ThemeProvider theme={themeOptions}>
      <StyledContainer maxWidth="lg" role="main">
        <Grid container rowSpacing={0}>
          <Grid item container xs={12} justifyContent="center">
            <LogoTitle />
          </Grid>
          <Grid container item justifyContent="center">
            <StyledCard>
              <Grid container columnSpacing={6} rowSpacing={4}>
                <TipInput
                  percentHandler={percentHandler}
                  onBillChange={onBillChange}
                  onPeopleChange={onPeopleChange}
                  customHandler={customHandler}
                  percent={percent}
                  people={people}
                  hasEntered={hasEntered}
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
        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/mseidel819">Matt Seidel</a>.
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
