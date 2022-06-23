import { CSSProp, css } from "styled-components";

export const InputTheme: { [key: string]: () => CSSProp } = {
  success: () => {
    return css`
      outline: 2px solid #05C168;
      background-image: url('/icons/success.svg');
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: calc(100% - 18px);
    `;
  },

  error: () => {
    return css`
      outline: 2px solid #FF5A65;
      background-image: url('/icons/error.svg');
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: calc(100% - 18px);
    `;
  }
};