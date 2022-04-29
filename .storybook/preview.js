import {ThemeProvider} from '@emotion/react';
import {addDecorator} from '@storybook/react';
import {withThemes} from '@react-theming/storybook-addon';
import {primary, secondary} from '../src/styles'

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [
    primary,
    secondary
]));