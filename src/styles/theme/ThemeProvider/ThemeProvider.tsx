import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from "@emotion/react";
import primary from "~/styles/theme/primary";

interface IIMSThemeProviderProps {
    theme?: Record<string, any>
    children: JSX.Element | JSX.Element[]
}

const ThemeProvider: React.FC<IIMSThemeProviderProps> = ({
                                                             theme,
                                                             children
                                                         }) => {

    return (
        <EmotionThemeProvider theme={{...primary, ...(theme ?? {})}}>
            {children}
        </EmotionThemeProvider>
    )
}

export default ThemeProvider