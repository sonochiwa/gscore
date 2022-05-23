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
    color: white;
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

/* container width 1268px */
export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 26px;
  margin: 0 auto;
`;

// UI kit

export const PrimaryButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  margin: 4px;
  padding: 20px 24px;
  color: var(--color_100);
  font-family: 'Thicccboi';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  background-color: var(--primary_1);
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  &:hover {
    background-color: var(--red_400);
  }
  &:focus {
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }
  &:disabled {
    opacity: .6;
    &:hover {
      background-color: var(--primary_1);
    }
  }
`;

export const SecondaryButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  margin: 4px;
  padding: 20px 24px;
  color: var(--primary_1);
  font-family: 'Thicccboi';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  background-color: var(--color_100);
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  &:hover {
    color: var(--red_400);
  }
  &:focus {
    outline: 4px solid rgba(255, 255, 255, 0.3);
  }
  &:disabled {
    opacity: .6;
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

export const HeadingH2 = styled.div`
  font-family: 'Thicccboi';
  font-weight: 700;
  font-size: 44px;
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