import { StyledPercentButton } from "./percent-button.styles";

const PercentButton = ({ children, percentHandler, percent }) => {
  return (
    <StyledPercentButton
      sx={{
        color: `${percent === children && "#00474B"}`,
        backgroundColor: `${percent === children && "#26C2AE"}`,
      }}
      onClick={() => percentHandler(children)}
    >
      {children}%
    </StyledPercentButton>
  );
};
export default PercentButton;
