import '@emotion/react'
import {IIMSTheme} from "../styles";

declare module '@emotion/react' {
    interface Theme extends IIMSTheme{
    }
}