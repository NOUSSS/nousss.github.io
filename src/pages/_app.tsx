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
  const [isAnalyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setAnalyticsEnabled(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.removeItem("cookieConsent");
    setAnalyticsEnabled(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setAnalyticsEnabled(false);
  };

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
