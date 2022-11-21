import { StyledPercentButton } from "./percent-button.styles";

type PercentButtonProps = {
  children: number;
  percentHandler: (num: number) => void;
  percent: number;
};

const PercentButton = ({
  children,
  percentHandler,
  percent,
}: PercentButtonProps) => {
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
