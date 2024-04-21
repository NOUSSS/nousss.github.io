import React, { ReactNode, useEffect, useRef, useState } from "react";
import background from "@/assets/Background3.jpg";

import { icons } from "lucide-react";
import { isMobile } from "../lib/isMobile";

import FastSearchBar from "./Fast-Searchbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [output, setOutput] = useState<React.ReactNode>();
  const [isVisible, setIsVisible] = useState(false);

  const SearchIcon = icons["Search"];
  const Settings = icons["Settings"];

  const metaColorRef = useRef<HTMLMetaElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = localStorage.getItem("color");
    const color =
      main ??
      getComputedStyle(document.documentElement).getPropertyValue(
        "--defaultColor",
      );

    if (metaColorRef.current) metaColorRef.current.content = color;
  }, [metaColorRef.current]);

  useEffect(() => {
    const colorPerso = localStorage.getItem("color");

    if (colorPerso)
      document.documentElement.style.setProperty("--mainColor", colorPerso);

    console.log(
      "%c Salut !",
      [
        "font-size: 12px",
        "color: #04fbb7",
        "font-family: monospace",
        "background: rgb(33 35 37)",
        "display: inline-block",
        "padding: 1rem 3rem",
        "border: 1px solid #04fbb7",
        "border-radius: 2px;",
      ].join(";"),
    );
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();

      if (overlayRef.current)
        isVisible
          ? overlayRef.current.classList.remove("hidden")
          : overlayRef.current.classList.add("hidden");
    }
  }, [isVisible]);

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F9N37DQQDM"
        ></script>

        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F9N37DQQDM');
`}
        </script>

        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mugiwara-no Streaming" />
        <meta
          property="og:description"
          content="À mon avis c'est le meilleur site pour regarder des animes / films ou lire des scans gratuitement et sans pub."
        />
        <meta ref={metaColorRef} data-react-helmet="true" name="theme-color" />
        <link rel="icon" href="/Logo.png" />

        <title>Mugiwara-no Streaming</title>
      </Head>

      <div
        className={`${isVisible ? "" : "hidden"} fixed left-2/4 top-2/4 z-[2026] h-[420px] w-[600px] -translate-x-2/4 -translate-y-2/4 animate-appearCenter border border-neutral-700 text-sm shadow-xl backdrop-blur-md transition-all duration-300 ease-out max-sm:w-full`}
        ref={searchContainerRef}
      >
        <div className="flex h-16 items-center border-b border-neutral-700 bg-zinc-900 bg-opacity-50 p-2">
          <SearchIcon size="35px" />

          <FastSearchBar
            className="w-full indent-2 text-lg"
            setOutput={setOutput}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            searchContainerRef={searchContainerRef}
            inputRef={inputRef}
          />
        </div>

        <div className="h-[calc(100%-64px)] overflow-y-scroll bg-zinc-900 bg-opacity-50">
          {output}
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden bg-black bg-opacity-20"
      ></div>

      <div className="fixed top-0 -z-50 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <header className="fixed left-0 top-0 z-[2024] flex h-16 w-full justify-center border-b border-b-neutral-700 bg-zinc-900 bg-opacity-50 shadow-lg backdrop-blur-3xl">
        <nav className="flex w-full items-center justify-around max-xl:w-[95%] max-xl:justify-between">
          <Link href="/">
            <h1
              className="group flex items-center gap-3 tracking-widest transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Image
                src="/Logo.png"
                alt="Maison"
                width={60}
                height={60}
                className="w-10"
              />

              <p className="text-2xl font-normal max-sm:hidden">
                <span className="font-normal transition-colors group-hover:text-white">
                  Mugiwara-no
                </span>{" "}
                Streaming
              </p>
            </h1>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              className="rounded-md border border-neutral-700 bg-zinc-800 bg-opacity-50 p-2 hover:text-orange-400"
              href="/Settings"
            >
              <Settings className="transition-colors" />
            </Link>

            <div
              onClick={() => setIsVisible(!isVisible)}
              className="flex cursor-pointer items-center rounded-md border border-neutral-700 bg-zinc-800 bg-opacity-50 p-2"
            >
              <SearchIcon size={22} className="w-6 md:mr-4" />

              <span className="text-base text-white max-md:hidden">
                Recherche rapide (Ctrl + K)
              </span>
            </div>
          </div>
        </nav>
      </header>

      {children}
    </>
  );
}
