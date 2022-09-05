import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

class MyDocument extends Document {

    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <meta name='description' content='Scan your soil for better planting decisions' />
                    <meta name='author' content='Eric Echemane' />

                    <meta property="og:title" content="Pixsoil - Soil Type Scanner" />
                    <meta property="og:description" content="Scan your soil for better planting decisions." />
                    <meta property="og:image" content="https://pixsoil.vercel.app/favicon.png" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;