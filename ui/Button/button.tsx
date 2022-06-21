import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ButtonTheme, LoaderTheme } from "./util/theme";

type ButtonVariant = "primary" | "secondary";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  theme?: ButtonVariant;
};

const Button: React.FC<IButton> = ({ isLoading, theme, children, ...props }: IButton) => {
  return (
    <Root $theme={theme} {...props}>
      {isLoading ? <Loader $theme={theme} /> : children}
    </Root>
  )
};

interface IRoot {
  $theme?: ButtonVariant;
};

const Root = styled.button<IRoot>`
  cursor: pointer;
  height: 58px;
  font-family: "Thicccboi";
  border-radius: 4px;
  border: none;
  padding: 20px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  ${({ $theme }) => $theme && ButtonTheme[$theme]};
`;

interface ILoader {
  $theme?: ButtonVariant;
};

const Loader = styled.div<ILoader>`
  @keyframes isLoading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  left: calc(50% - 9px);
  width: 18px;
  height: 18px;
  color: white;
  animation-name: isLoading;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-delay: none;
  animation-iteration-count: infinite;
  ${({ $theme }) => $theme && LoaderTheme[$theme]};
`;

export default Button;
