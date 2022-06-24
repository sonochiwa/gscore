import { CSSProp, css } from "styled-components";

export const StatusTheme: { [key: string]: () => CSSProp } = {
  ACTIVE: () => {
    return css`
      color: #05C168;
    `;
  },

  INACTIVE: () => {
    return css`
      color: #FF5A65;;
    `;
  },

  HOLD: () => {
    return css`
      color: #FF9E2C;
    `;
  }
};