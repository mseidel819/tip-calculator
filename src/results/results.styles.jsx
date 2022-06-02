import { styled, Button, Grid, Card } from "@mui/material";

export const StyledGridContainer = styled(Grid)({});

export const StyledCard = styled(Card)({
  backgroundColor: "#00474B",
  height: "80%",
  padding: "40px",
});

export const SubmitButton = styled(Button)({
  width: "100%",
  backgroundColor: "#26C2AE",
  color: "#00474B",
  textTransform: "uppercase",

  "&:hover": {
    backgroundColor: "#9FE8DF",
  },
});
