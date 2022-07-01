import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorText } from "../../styles/main";
import { InputTheme } from "./util/theme";

type Theme = "success" | "error" | "default";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: object;
  name: string;
  fieldState: { isTouched: boolean, invalid: boolean, isDirty: boolean; };
};

const Input: React.FC<IInput> = ({ errorMessage, fieldState, name, children, ...props }: IInput) => {
  const { isTouched, isDirty, invalid } = fieldState;

  return (
    <div>
      <Root
        type="text"
        $theme={isTouched && isDirty ? (!invalid ? "success" : "error") : "default"}
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
  $theme?: Theme;
};

const Root = styled.input<IRoot>`
  width: 100%;
  height: 66px;
  line-height: 18px;
  outline: none;
  border-radius: 6px;
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
  ${({ $theme }) => $theme && InputTheme[$theme]};
`;

export default Input;