import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/assets/styles/theme/default';
import { Container } from './src/assets/styles';
import { Main } from './src/components/Main';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <StatusBar />
        <Main />
      </Container>
    </ThemeProvider>
  );
}
