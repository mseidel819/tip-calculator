import { styled, Container, Card } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",

  "@media (max-width: 600px)": {
    marginTop: "20px",
  },
});

export const StyledCard = styled(Card)({
  backgroundColor: "white",
  boxShadow: "0px 32px 43px rgba(79, 166, 175, 0.200735)",
  borderRadius: "25px",
  padding: "32px",
  maxWidth: "900px",
  marginTop: "80px",

  "@media (max-width: 600px)": {
    marginTop: "20px",
  },
});
