import { styled, Container, Card } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const StyledCard = styled(Card)({
  backgroundColor: "white",
  boxShadow: "0px 32px 43px rgba(79, 166, 175, 0.200735)",
  borderRadius: "25px",
  padding: "32px",
  maxWidth: "920px",
});
