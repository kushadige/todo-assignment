import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/Global.styles.css';
import { theme } from '../themes/theme';
import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const [themeActive, setThemeActive] = useState('LIGHT');

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeActive === 'LIGHT' ? theme.LIGHT : theme.DARK}>
        <Component setThemeActive={setThemeActive} themeActive={themeActive} {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp
