import styled from 'styled-components';

interface IRoot {
  $loading?: any;
  theme: string;
};

interface IButton {
  isLoading?: any;
  theme?: any;
  disabled?: any;
  value: string;
}

// const Button: React.FC<IButton> = ({ isLoading, disabled, theme }: IButton) => {
//   return (
//     <Root $loading={isLoading} $theme={theme} disabled={disabled || isLoading}>
//       {isLoading ? <Loader color={theme === 'primary' ? 'var(--white)' : 'var(--dark)'} /> : children}
//     </Root>
//   )
// };

const Button: React.FC<IButton> = ({ isLoading, disabled, theme, value }: IButton) => {
  return (
    <Root>{value}</Root>
  )
};

const Root = styled.button<IRoot>`
  position: relative; 
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 20px 24px;
  font-family: 'Thicccboi';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  color: ${props => props.$loading ? 'transparent !important' : 'white'};

  &::before {
    @keyframes loading {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    position: absolute;
    content: ${props => props.$loading ? ' url(/icons/loading.svg)' : ''};
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    color: ${props => props.$loading ? 'white' : 'transparent !important'};
    animation-name: loading;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-delay: none;
    animation-iteration-count: infinite;
  }

  &:active {
    outline: none;
  }

  &:disabled {
    opacity: .6;
  }
`;

export const PrimaryButton = styled(Root)`
  color: var(--color_100);
  background-color: var(--primary_1);
  &:hover {
    background-color: var(--red_400);
  }
  &:focus {
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }
  &:disabled {
    &:hover {
      background-color: var(--primary_1);
    }
  }
`;

export const SecondaryButton = styled(Root)`
  color: var(--primary_1);
  background-color: var(--color_100);
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  &:hover {
    color: var(--red_400);
  }
  &:focus {
    outline: 4px solid rgba(255, 255, 255, 0.3);
  }
  &:disabled {
    &:hover {
      color: var(--primary_1);
    }
  }
`;

export default Button;