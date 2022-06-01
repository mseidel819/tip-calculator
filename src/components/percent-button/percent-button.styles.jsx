import { styled, Button } from "@mui/material";

export const StyledPercentButton = styled(Button)({
  backgroundColor: "#00474B",
  color: "white",
  fontSize: "24px",
  lineHeight: "36px",
  width: "100%",

  "&:hover": {
    color: "#00474B",
    backgroundColor: "#9FE8DF",
  },
});
