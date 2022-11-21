import { styled, Input } from "@mui/material";

export const StyledInput = styled(Input)({
  backgroundColor: "#F3F9FA",
  color: "#00474B",
  fontSize: "24px",
  borderRadius: "5px",
  padding: "6px 17px",
  marginTop: "6px",
  width: "100%",
  direction: "rtl",

  "&.Mui-focused": {
    border: "2px solid #26C2AE",
    padding: "4px 15px",
  },

  "&.Mui-error": {
    border: "2px solid red",
    padding: "4px 15px",
  },
});

export const CustomInput = styled(Input)({
  backgroundColor: "#F3F9FA",
  color: "#00474B",
  fontSize: "24px",

  borderRadius: "5px",
  padding: "6px 14px",
  fontsize: "24px",
  width: "100%",

  "&.Mui-focused": {
    border: "2px solid #26C2AE",
    padding: "4px 12px",
  },
});
