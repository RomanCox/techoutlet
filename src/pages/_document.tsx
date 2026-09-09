import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/*
          Always start the page scrolled to the top, even on a hard reload.
          Runs before hydration so the browser's own scroll-restoration never
          gets a chance to jump in first - the scroll-driven animation in
          NewCompanyDescription depends on starting from scrollY 0.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual'
              }
              window.scrollTo(0, 0)
            `,
          }}
        />
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
