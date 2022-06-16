import { CSSProp, css } from "styled-components"

interface ITheme {
  loading?: boolean;
  active?: boolean
}

export const THEME: { [key: string]: (args: ITheme) => CSSProp } = {

} 