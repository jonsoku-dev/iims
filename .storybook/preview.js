import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import primaryTheme from '../src/styles/theme/primary'
import secondaryTheme from '../src/styles/theme/secondary'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [
  primaryTheme,
  secondaryTheme
]));