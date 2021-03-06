import Document, { DocumentProps, Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  };

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};

export default MyDocument;