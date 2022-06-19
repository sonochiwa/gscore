import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Thicccboi';
    src: url('/fonts/Thicccboi/THICCCBOI-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Thicccboi';
    src: url('/fonts/Thicccboi/THICCCBOI-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Thicccboi';
    src: url('/fonts/Thicccboi/THICCCBOI-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Thicccboi';
    src: url('/fonts/Thicccboi/THICCCBOI-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DM Sans/DMSans-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--color_800);
    color: var(--color_100);
  }

  :root {
    /* Accent Color */
    --primary_1: #FC5842;

    /* Secondary Colors */
    --color_1: #D1311C;
    --color_2: #FFF0EE;

    /* Neutral Colors */
    --color_800: #181818;
    --color_700: #393939;
    --color_600: #737373;
    --color_500: #969696;
    --color_400: #C7C7C7;
    --color_300: #D7D7D7;
    --color_200: #FBFBFB;
    --color_100: #FFFFFF;

    /* System Colors */
    --green_300:#05C168;
    --red_400: #DC2B2B;
    --red_300: #FF5A65;
    --red_200: #FFBEC2;
    --red_100: #FFEFF0;
    --orange_300: #FF9E2C;
  }

  a {
    color: var(--color_100);
    text-decoration: none;
  }
`;

// Icons
export const FilledCheckMark = styled.div`
  width: 26px;
  height: 26px;
  background-image: url('/icons/FilledCheckMark.svg');
`;

/* container width 1268px */
export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 26px;
  margin: 0 auto;
`;

// UI kit

interface IButton {
  $loading?: any;
}

const Button = styled.button<IButton>`
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

export const PrimaryButton = styled(Button)`
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

export const SecondaryButton = styled(Button)`
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

export const Logo = styled.div`
  width: 170px;
  height: 42px;
  background-image: url('/logo.svg');
`;

interface IHeadingH2 {
  left?: boolean;
}

export const HeadingH2 = styled.div<IHeadingH2>`
  font-family: 'Thicccboi';
  text-align: ${ props => props.left ? 'left' : 'center'};
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: var(--color_100);
`;

export const HeadingH3 = styled.div`
  font-family: 'Thicccboi';
  text-align: 'left';
  font-weight: 700;
  font-size: 28px;
  line-height: 54px;
  color: var(--color_100);
`;

export const Typography = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: var(--color_400);
  color: ${props => props.color};
`;

export const TextInput = styled.input`
  border-radius: 6px;
  outline: none;
  border: 1px solid var(--color_300);
  padding: 23px 25px;
  font-family: 'Thicccboi';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  caret-color: var(--primary_1);
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  color: var(--color_700);
  width: 100%;
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

export const ErrorP = styled.p`
  font-family: 'Thicccboi';
  color: var(--red_300);
  margin-top: 5px;
`