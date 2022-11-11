import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/Global.styles.css';
import { theme } from '../themes/theme';

function MyApp({ Component, pageProps }) {
  const [themeActive, setThemeActive] = useState('LIGHT');

  return (
    <ThemeProvider theme={themeActive === 'LIGHT' ? theme.LIGHT : theme.DARK}>
      <Component setThemeActive={setThemeActive} themeActive={themeActive} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
