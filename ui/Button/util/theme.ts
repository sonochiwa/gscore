import { CSSProp, css } from "styled-components";

interface ButtonThemeArgs {
  loading?: boolean;
}

export const ButtonTheme: { [key: string]: (args: ButtonThemeArgs) => CSSProp } = {
  primary: ({ loading }) => {
    return css`
      color: var(--color_100);
      background-color: var(--primary_1);
      &:hover {
        background-color: var(--red_400);
      }
      &:focus {
        outline: 4px solid rgba(252, 88, 66, 0.3);
      }
      &:disabled {
        ${loading
        ? ''
        : css`
          opacity: .6;
          &:hover {
            background-color: var(--primary_1);
          }
        `}
      }
    `;
  },

  secondary: ({ loading }) => {
    return css`
      color: var(--primary_1);
      background-color: var(--color_100);
      &:hover {
        color: var(--red_400);
      }
      &:focus {
        outline: 4px solid rgba(255, 255, 255, 0.3);
      }
      &:disabled {
        ${loading
        ? ''
        : css`
          opacity: .6;
          &:hover {
            background-color: var(--color_100);
          }
        `}
      }
    `;
  }
};

export const LoaderTheme: { [key: string]: () => CSSProp } = {
  primary: () => {
    return css`
      background-image: url('/icons/loading-white.svg');
    `;
  },

  secondary: () => {
    return css`
      background-image: url('/icons/loading-orange.svg');
  `;
  }
};