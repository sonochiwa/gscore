import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorText } from "../../styles/main";
import { InputTheme } from "./util/theme";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: any;
  name: string;
  isValid: any;
};

const Input = ({ errorMessage, isValid, name, children, ...props }: IInput) => {
  const invalid = isValid.invalid;
  const isTouched = isValid.isTouched;

  return (
    <div>
      <Root
        type="text"
        $isValid={isTouched && !invalid ? "success" : isTouched && "error"}
        {...props}
      />
      <ErrorMessage
        errors={errorMessage}
        name={name}
        render={({ message }) => <ErrorText>{message}</ErrorText>}
      />
    </div>
  )
};

interface IRoot {
  $isValid?: any;
}

const Root = styled.input<IRoot>`
  width: 100%;
  height: 66px;
  line-height: 18px;
  outline: none;
  border-radius: 6px;
  outline: 1px solid var(--color_300);
  border: none;
  padding: 23px 25px;
  caret-color: var(--primary_1);
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  color: var(--color_700);
  font-family: "Thicccboi";
  font-size: 16px;
  font-weight: 400;
  ::placeholder {
    color: var(--color_500);
  }
  :disabled {
    background-color: var(--color_300);
    ::placeholder {
      color: var(--color_700);
    }
  }
  ${({ $isValid }) => $isValid && InputTheme[$isValid]};
`;

export default Input;