/* eslint-disable react/display-name */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import Script from 'next/script';

const getCache = () => {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;
  return cache;
};

const GOOGLE_FONT = `https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap`;
const Mulish = '/fonts/Mulish-Regular.woff2';
const fetchUrl =
  process.env.NEXT_PUBLIC_FETCH_WRAPPER_URL ||
  'https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.js';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.gstatic.com"
            rel="preconnect"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link href={GOOGLE_FONT} rel="stylesheet" />

          <link
            rel="preload"
            href={Mulish}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face{font-family:'Mulish';font-style:normal;font-weight:600;font-display:swap;src:url('${Mulish}') format('woff2');}`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script strategy="beforeInteractive" src={fetchUrl} />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  const cache = getCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // Take precedence over the CacheProvider in our custom _app.js
      enhanceComponent: (Component) => (props) =>
        (
          <CacheProvider value={cache}>
            <Component {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
