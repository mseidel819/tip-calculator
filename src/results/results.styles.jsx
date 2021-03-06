import { styled, Button, Card } from "@mui/material";

export const StyledCard = styled(Card)({
  backgroundColor: "#00474B",
  height: "80%",
  padding: "40px",
  borderRadius: "15px",

  "@media (max-width:450px)": {
    padding: "30px 10px",
  },
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

export const DisabledButon = styled(Button)({
  width: "100%",
  backgroundColor: "#0D686D",
  // color: "#00474B",
  textTransform: "uppercase",
});
