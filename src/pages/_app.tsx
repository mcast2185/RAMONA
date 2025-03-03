// import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';


// import { store } from "../app/store";

import "../styles/globals.css";


function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <SessionProvider session={session}>
        {/* <Provider store={store} > */}
          <Component {...pageProps} />
        {/* </Provider> */}
    </SessionProvider>
  );
};

export default MyApp;