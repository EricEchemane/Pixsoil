import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

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
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
