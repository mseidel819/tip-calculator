import { Grid, Typography, InputAdornment } from "@mui/material";
import { ReactComponent as IconDollar } from "../images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../images/icon-person.svg";
import PercentButton from "../components/percent-button/percent-button.component";
import { StyledInput, CustomInput } from "./input.styles";
import { ChangeEvent } from "react";

type TipInputProps = {
  onBillChange: (e: ChangeEvent<HTMLInputElement>) => void;
  percentHandler: (num: number) => void;
  percent: number;
  onPeopleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  people: number;
  customHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TipInput = ({
  onBillChange,
  percentHandler,
  percent,
  onPeopleChange,
  people,
  customHandler,
}: TipInputProps) => {
  const tipArray = [10, 15, 20, 25, 30];

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
          endAdornment={
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
            <CustomInput
              onChange={customHandler}
              id="input-to-clear3"
              disableUnderline
              placeholder="Custom"
              type="number"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="space-between">
        <Grid item xs={6}>
          <Typography variant="h2" color="#5E7A7D">
            Number of People
          </Typography>
        </Grid>
        {people === 0 && (
          <Grid item xs={4}>
            <Typography variant="h2" color="red">
              Can't be zero
            </Typography>
          </Grid>
        )}

        <StyledInput
          onChange={onPeopleChange}
          error={people === 0}
          type="number"
          id="input-to-clear1"
          disableUnderline
          placeholder="0"
          endAdornment={
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
