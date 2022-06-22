import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorText } from "../../styles/main";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  name?: any;
};

const Input = ({ errors, name, children, ...props }: IInput) => {
  return (
    <div>
      <Root {...props} />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorText>{message}</ErrorText>}
      />
    </div>
  )
};

const Root = styled.input`
  width: 100%;
  height: 66px;
  line-height: 18px;
  outline: none;
  border-radius: 6px;
  border: 1px solid var(--color_300);
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
  :focus {
    border: 1px solid var(--color_500);
  }
  :disabled {
    background-color: var(--color_300);
    ::placeholder {
      color: var(--color_700);
    }
  }
`;

export default Input;