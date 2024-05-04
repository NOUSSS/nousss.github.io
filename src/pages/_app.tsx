import "@/assets/global.css";

import RootLayout from "@/app/components/layout";

import { AppProps } from "next/app";
import { Toaster } from "sonner";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
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
