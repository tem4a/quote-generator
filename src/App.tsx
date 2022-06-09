import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import QuoteGenerator from './components/quote-generator';
import GlobalStyle from './styles/global.styles';
import * as S from './styles/app.styles';
import { theme } from './styles/theme';

const ErrorStyled = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary1};

  button {
    margin-top: 16px;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <ErrorStyled role="alert">
      There was an error: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </ErrorStyled>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <S.AppContainer>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QuoteGenerator />
          </ErrorBoundary>
        </S.AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
