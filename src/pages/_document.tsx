import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {process.env.NODE_ENV === 'development' && (
          <>
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Expires" content="0" />
          </>
        )}
      </Head>
      <body>
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  )
}
