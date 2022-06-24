import { CSSProp, css } from "styled-components";

export const StatusTheme: { [key: string]: () => CSSProp } = {
  Active: () => {
    return css`
      color: #05C168;
    `;
  },

  Inactive: () => {
    return css`
      color: #FF5A65;;
    `;
  },

  Hold: () => {
    return css`
      color: #FF9E2C;
    `;
  }
};