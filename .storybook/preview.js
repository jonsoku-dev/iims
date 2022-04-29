import {addDecorator} from '@storybook/react';
import {withThemes} from '@react-theming/storybook-addon';
import {primary, secondary, ThemeProvider} from '../src/styles'

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

// const providerFn = ({theme, children}) => {
//     return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// };

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [
    primary,
    secondary
]));
