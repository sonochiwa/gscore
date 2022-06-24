import styled from "styled-components";

interface ICheckbox {

}

const Checkbox: React.FC<ICheckbox> = () => {
  return (
    <Root>
      <input type="checkbox" />
      <span />
    </Root>
  )
};

const Root = styled.label`
  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    width: 30px;
    height: 30px;
  }
  & ::before {
    cursor: pointer;
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--color_400);
    background-color: var(--color_100);
    border-radius: 7px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  & :not(:disabled):not(:checked)+span:hover::before {
    background-color: var(--color_400);
    border-color: var(--color_400);
  }
  & :not(:disabled)+span:hover::before {
    background-color: var(--red_400);
    border-color: var(--red_400);
  }
  & :focus+span::before {
    outline:  4px solid rgba(252, 88, 66, 0.3);
  }
  & :focus:not(:checked)+span::before {
    outline:  4px solid rgba(199, 199, 199, 0.3);
    border-color: var(--color_100);
  }
  & :checked+span::before {
    border-color: #FC5842;
    background-color: #FC5842;
    background-image: url("/icons/check.svg");
  }
  & :disabled+span::before {
    background-color: var(--red_400);
    border-color: var(--red_400);
    opacity: .5;
  }
  & :disabled:not(:checked)+span::before {
    background-color: var(--color_100);
    border-color: var(--color_400);
    opacity: .5;
  }
`;

export default Checkbox;