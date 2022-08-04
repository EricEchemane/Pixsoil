import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { RouterTransition } from 'components/RouterTransition';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        colors: {
          'brown': ['#6c4936']
        }
      }}
    >
      <RouterTransition />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
