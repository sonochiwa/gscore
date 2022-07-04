import styled, { createGlobalStyle } from "styled-components";

const size = {
  mobile: '560px',
  tablet: '1024px',
};

export const device = {
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
};

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/Inter-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/Inter-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/Inter-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Thicccboi";
    src: url("/fonts/Thicccboi/THICCCBOI-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Thicccboi";
    src: url("/fonts/Thicccboi/THICCCBOI-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Thicccboi";
    src: url("/fonts/Thicccboi/THICCCBOI-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Thicccboi";
    src: url("/fonts/Thicccboi/THICCCBOI-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("/fonts/DM Sans/DMSans-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    /* height: 100%; */
    overflow-x: hidden;
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
  background-image: url("/icons/FilledCheckMark.svg");
`;

/* container width 1268px */
export const Container = styled.div`
  width: 100%;
  max-width: 1268px;
  margin: 0 auto;
  padding: 0 15px;
  /* background-color: red; */

  @media ${device.tablet} {
    /* background-color: green; */
    max-width: 740px;
  }

  @media ${device.mobile} {
    /* background-color: brown; */
    /* min-width: 375px; */
    max-width: 100%;
  }
`;

// UI kit

export const Logo = styled.div`
  width: 170px;
  height: 42px;
  background-image: url("/logo.svg");
`;

interface IHeadingH2 {
  left?: boolean;
};

export const HeadingH2 = styled.div<IHeadingH2>`
  font-family: "Thicccboi";
  text-align: ${props => props.left ? "left" : "center"};
  font-weight: 700;
  line-height: 54px;
  color: var(--color_100);
  font-size: 44px;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
  @media ${device.mobile} {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const HeadingH3 = styled.div`
  font-family: "Thicccboi";
  text-align: left;
  font-weight: 700;
  line-height: 40px;
  color: var(--color_100);
  font-size: 28px;

  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const Typography = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: var(--color_400);
  color: ${props => props.color};
`;

export const ErrorText = styled.p`
  margin-top: 2px;
  font-family: "Thicccboi";
  font-size: 16px;
  color: var(--red_300);
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-family: 'Thicccboi';
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;