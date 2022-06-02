import { Grid, Card, Typography } from "@mui/material";
import { ReactComponent as IconDollar } from "../images/icon-dollar.svg";

import {
  SubmitButton,
  StyledGridContainer,
  StyledCard,
  StyledIconDollar,
} from "./results.styles";

const ResultsOutput = ({ bill, people, percent, resetHandler }) => {
  const tipPerPerson = (bill, people, percent) => {
    const deci = percent / 100;
    return (bill * deci) / people;
  };

  const tipDisplay = tipPerPerson(bill, people, percent).toFixed(2);

  const totalPerDisplay = +tipDisplay + bill / people;

  return (
    <StyledGridContainer item md={6}>
      <StyledCard>
        <Grid container>
          <Grid item container xs={12}>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Typography variant="h3">Tip Amount</Typography>
                <Typography variant="body1">/ person</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">
                  ${people > 0 ? tipDisplay : "0.00"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={6}>
                <Typography variant="h3">Total</Typography>
                <Typography variant="body1">/ person</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">
                  ${people > 0 ? totalPerDisplay : "0.00"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <SubmitButton onClick={resetHandler}>reset</SubmitButton>
          </Grid>
        </Grid>
      </StyledCard>
    </StyledGridContainer>
  );
};
export default ResultsOutput;
