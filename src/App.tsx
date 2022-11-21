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
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percent, setPercent] = useState("");

  const onBillChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const billInput = e.target.value;
    setBill(billInput);
  };

  const percentHandler = (num) => {
    setPercent(num);
  };

  const onPeopleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const peopleInput = e.target.value;
    setPeople(peopleInput);
  };

  const customHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setPercent(amount);
  };

  const input1 = document.getElementById("input-to-clear1")!;
  const input2 = document.getElementById("input-to-clear2")!;
  const input3 = document.getElementById("input-to-clear3")!;

  const resetHandler = () => {
    setBill("");
    setPeople("");
    setPercent("");
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
