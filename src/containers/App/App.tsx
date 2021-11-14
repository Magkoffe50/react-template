import React from 'react';
import ThemeProvider from '../../theme';
// import styles from './styles.module.scss';
import Routes from '../Routes';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => (
  <>
    <ThemeProvider> {children}
    </ThemeProvider>
  </>
);

export default App;
