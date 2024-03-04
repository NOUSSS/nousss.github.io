import "@/app/defaultStyles/global.scss";

import RootLayout from "@/app/ui/layout";

import type { AppProps } from "next/app";
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
