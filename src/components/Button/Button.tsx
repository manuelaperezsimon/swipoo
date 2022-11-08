import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  action?: () => void;
  style?: string;
  isDisabled?: boolean;
}

const Button = ({
  text,
  type,
  action,
  style,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      {" "}
      <button
        className={`button ${style}`}
        type={type}
        onClick={action}
        disabled={isDisabled}
      >
        {text}{" "}
      </button>
    </ButtonStyled>
  );
};

export default Button;
