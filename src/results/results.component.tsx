import { Grid, Typography } from "@mui/material";
import React from "react";

import { SubmitButton, StyledCard, DisabledButon } from "./results.styles";

type ResultsOutputType = {
  bill: number;
  people: number;
  percent: number;
  resetHandler: () => void;
};

const ResultsOutput = ({
  bill,
  people,
  percent,
  resetHandler,
}: ResultsOutputType): JSX.Element => {
  const tipPerPerson = (
    bill: number,
    people: number,
    percent: number
  ): number => {
    const deci = percent / 100;
    return (bill * deci) / people;
  };

  const tipDisplay = tipPerPerson(bill, people, percent).toFixed(2);

  const totalPerDisplay = (+tipDisplay + bill / people).toFixed(2);

  return (
    <Grid item md={6}>
      <StyledCard>
        <Grid container rowSpacing={17}>
          <Grid item container xs={12} rowSpacing={3}>
            <Grid container item xs={12} alignItems="center">
              <Grid item xs={6} sm={6}>
                <Typography variant="h3">Tip Amount</Typography>
                <Typography variant="body1">/ person</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "36px", sm: "48px" } }}
                >
                  ${people > 0 ? tipDisplay : "0.00"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h3">Total</Typography>
                <Typography variant="body1">/ person</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "36px", sm: "48px" } }}
                >
                  ${people > 0 ? totalPerDisplay : "0.00"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {bill || people || percent ? (
              <SubmitButton onClick={resetHandler}>reset</SubmitButton>
            ) : (
              <DisabledButon disabled>reset</DisabledButon>
            )}
          </Grid>
        </Grid>
      </StyledCard>
    </Grid>
  );
};
export default ResultsOutput;
