import Provider from '@/providers';
import RootLayout from '@/components/layouts/Root';
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/prism.css';
import '@/styles/mdx.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <RootLayout>
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      </RootLayout>
    </Provider>
  );
}

export default App;
