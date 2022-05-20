import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap'
                    />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/icon?family=Material+Icons'
                    />
                    <link href='https://fonts.googleapis.com/css?family=Quicksand:100,300,400,500,700&display=swap' rel='stylesheet' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};

export default MyDocument;