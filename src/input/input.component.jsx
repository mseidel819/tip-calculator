import { Grid, Typography, InputAdornment, Button } from "@mui/material";
import { ReactComponent as IconDollar } from "../images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../images/icon-person.svg";
import PercentButton from "../components/percent-button/percent-button.component";
import { StyledInput, CustomInput } from "./input.styles";

const TipInput = ({
  onBillChange,
  percentHandler,
  percent,
  onPeopleChange,
  people,
  bill,
}) => {
  const tipArray = [5, 10, 15, 25, 50];

  return (
    <Grid container item md={6} rowSpacing={5}>
      <Grid item xs={12}>
        <Typography variant="h2" color="#5E7A7D">
          Bill
        </Typography>
        <StyledInput
          onChange={onBillChange}
          id="input-to-clear2"
          type="number"
          disableUnderline
          placeholder="0"
          startAdornment={
            <InputAdornment position="start">
              <IconDollar />
            </InputAdornment>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2" color="#5E7A7D">
          Select Tip %
        </Typography>
        <Grid container spacing={2}>
          {tipArray.map((tip) => {
            return (
              <Grid key={tip} item xs={6} md={4}>
                <PercentButton
                  percentHandler={percentHandler}
                  percent={percent}
                >
                  {tip}
                </PercentButton>
              </Grid>
            );
          })}

          <Grid item xs={6} md={4}>
            <CustomInput disableUnderline placeholder="Custom" type="number" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" color="#5E7A7D">
          {" "}
          Number of People
        </Typography>
        <StyledInput
          onChange={onPeopleChange}
          type="number"
          id="input-to-clear1"
          disableUnderline
          placeholder="0"
          startAdornment={
            <InputAdornment position="start">
              <IconPerson />
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};

export default TipInput;
