import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='test' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
