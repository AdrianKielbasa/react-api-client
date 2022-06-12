import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import Button from './components/atoms/Button/Button';
import GlobalStyle from './theme/GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button primary>Button</Button>
  </ThemeProvider>
);

export default App;
