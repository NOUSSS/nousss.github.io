import "@/assets/global.css";

import RootLayout from "@/app/components/layout";

import { AppProps } from "next/app";
import { Toaster } from "sonner";

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Toaster theme="system" closeButton={true} richColors />

      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
