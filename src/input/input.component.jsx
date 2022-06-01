import { Grid, Typography, InputAdornment } from "@mui/material";
import { ReactComponent as IconDollar } from "../images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../images/icon-person.svg";
import PercentButton from "../components/percent-button/percent-button.component";
import { StyledInput, CustomInput } from "./input.styles";

const TipInput = () => {
  return (
    <Grid container item md={6} rowSpacing={5}>
      <Grid item xs={12}>
        <Typography variant="h2" color="#5E7A7D">
          Bill
        </Typography>
        <StyledInput
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
          {" "}
          Select Tip %
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <PercentButton>5</PercentButton>
          </Grid>
          <Grid item xs={6} md={4}>
            <PercentButton>10</PercentButton>
          </Grid>
          <Grid item xs={6} md={4}>
            <PercentButton>15</PercentButton>
          </Grid>
          <Grid item xs={6} md={4}>
            <PercentButton>25</PercentButton>
          </Grid>
          <Grid item xs={6} md={4}>
            <PercentButton>50</PercentButton>
          </Grid>
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
          type="number"
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
