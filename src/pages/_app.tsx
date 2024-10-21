import "@/assets/global.css";

import RootLayout from "@/app/components/layout";
import Head from "next/head";

import { AppProps } from "next/app";
import { Toaster } from "sonner";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "v") {
        router.push("/VerifSaisons");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
