import React from "react";
import Head from "next/head";

import '../styles/main.scss'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Board Games</title>
      <link rel="stylesheet" href="/_next/static/styles/main.scss" />
    </Head>
    <section>
      <Component {...pageProps} />
    </section>
  </>
);

export default App;
