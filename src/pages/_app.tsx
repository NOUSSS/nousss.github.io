import "@/assets/global.css";

import RootLayout from "@/app/components/layout";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";

import { AppProps } from "next/app";
import { Toaster } from "sonner";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const handleAcceptCookies = () => {
    localStorage.removeItem("cookieConsent");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "v") {
        router.push("/VerifAS");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (process.env.NODE_ENV === "production") {
      const disableDevTools = (e: any) => {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
          e.preventDefault();
        }
        if (e.keyCode === 123) {
          e.preventDefault();
        }
      };

      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      document.addEventListener("keydown", disableDevTools);

      return () => {
        document.removeEventListener("keydown", disableDevTools);
      };
    }
  }, []);

  return (
    <RootLayout>
      <Head>
        <title>Mugiwara-no Streaming</title>
        <meta
          name="description"
          content="Mugiwara no Streaming est un site de référencement d'animes (films + scans) sans publicitées intrusives et avec une interface intuitive."
        />

        <meta property="twitter:title" content="Mugiwara-no Streaming"></meta>
        <meta property="twitter:image" content="/Logo.png" />
        <meta property="og:image" content="/Logo.png" />

        <meta
          property="twitter:description"
          content="Mugiwara no Streaming est un site de référencement d'animes (films + scans) sans publicitées intrusives et avec une interface intuitive."
        />

        <meta
          property="og:url"
          content="https://mugiwara-no-streaming.com"
        ></meta>
        <meta property="og:site_name" content="Mugiwara-no Streaming" />

        <meta name="keywords" content="anime, scans, film, streaming" />
      </Head>

      <Toaster
        position="top-center"
        theme="system"
        closeButton={true}
        richColors
      />

      <Component {...pageProps} />

      <CookieConsent
        location="bottom"
        buttonText="J'accepte"
        enableDeclineButton
        flipButtons
        declineButtonText="Je refuse"
        cookieName="cookie-consent"
        buttonStyle={{
          transform: "scale(1.1)",
          background: "green",
          color: "white",
        }}
        declineButtonStyle={{
          background: "transparent",
          border: "1px solid red",
        }}
        expires={150}
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
      >
        Ce site utilise des cookies pour améliorer votre expérience.
      </CookieConsent>

      <GoogleAnalytics gaId="G-F9N37DQQDM" />
    </RootLayout>
  );
};

export default App;
