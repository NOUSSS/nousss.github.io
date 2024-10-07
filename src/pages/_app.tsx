import "@/assets/global.css";

import RootLayout from "@/app/components/layout";
import Head from "next/head";

import { AppProps } from "next/app";
import { Toaster } from "sonner";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Head>
        <title>Mugiwara-no Streaming</title>

        <meta
          name="description"
          content="Site de référencement d'animes (films + scans)"
        />

        <meta name="keywords" content="anime, scans, film, streaming" />
      </Head>

      <Toaster
        position="top-center"
        theme="system"
        closeButton={true}
        richColors
      />

      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
