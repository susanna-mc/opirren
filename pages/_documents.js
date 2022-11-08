import 'bootstrap/dist/css/bootstrap.min.css';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { SSRProvider } from 'react-bootstrap';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || 'en' };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === 'fa' ? 'rtl' : 'ltr'}
        lang={this.props.locale}
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
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
