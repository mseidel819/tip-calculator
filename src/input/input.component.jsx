import {
  Grid,
  Typography,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ReactComponent as IconDollar } from "../images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../images/icon-person.svg";
import PercentButton from "../components/percent-button/percent-button.component";

const TipInput = () => {
  return (
    <Grid container item md={6}>
      <Grid item xs={12}>
        <Typography variant="h2"> Bill</Typography>
        <Input
          disableUnderline
          placeholder="0"
          startAdornment={
            <InputAdornment position="start">
              <IconDollar />
            </InputAdornment>
          }
        />
      </Grid>

      <Grid item>
        <Typography variant="h2"> Select Tip %</Typography>
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
            <Input disableUnderline placeholder="custom" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h2"> Number of People</Typography>
        <Input
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
