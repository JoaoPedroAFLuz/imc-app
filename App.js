import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/assets/styles/theme/default';
import { Container } from './src/assets/styles';
import { Title } from './src/components/Title';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <StatusBar />
        <Title />
      </Container>
    </ThemeProvider>
  );
}
