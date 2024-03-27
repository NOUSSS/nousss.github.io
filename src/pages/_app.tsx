import "@/app/defaultStyles/global.css";

import RootLayout from "@/app/ui/layout";

import { AppProps } from "next/app";
import { Toaster } from "sonner";

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Toaster richColors />

      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
