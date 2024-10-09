import { ColorPicker, Footer, RemoveHistorique } from "@/app/components/";
import Head from "next/head";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Paramètres | Mugiwara-no Streaming</title>

        <meta
          property="og:description"
          content="Page des paramètres de Mugiwara-no Streaming"
        />
      </Head>

      <main className="border border-neutral-700 bg-zinc-900 bg-opacity-50 p-4 sm:p-6 md:mx-24 md:rounded-md xl:mx-44">
        <h1 className="text-left text-2xl">Paramètres</h1>

        <ul className="mt-8 flex flex-col gap-4 *:flex *:items-center *:justify-between sm:ml-5">
          <li>
            <p>Changer de couleur thème</p>
            <ColorPicker />
          </li>

          <li>
            <p>Historique</p>
            <RemoveHistorique />
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
