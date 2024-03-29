import React, { ReactNode, useEffect, useRef, useState } from "react";
import background from "@/assets/Background3.jpg";

import { icons } from "lucide-react";
import { isMobile } from "../lib/isMobile";

import FastSearchBar from "./FastSearch-bar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [output, setOutput] = useState<React.ReactNode>();
  const [isVisible, setIsVisible] = useState(false);

  const SearchIcon = icons["Search"];

  const metaColorRef = useRef<HTMLMetaElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTextRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = localStorage.getItem("color");
    const color = main ?? "#ffea00";

    if (metaColorRef.current) metaColorRef.current.content = color;
  }, [metaColorRef.current]);

  useEffect(() => {
    if (searchTextRef.current && !isMobile()) {
      searchTextRef.current.innerText += "(Ctrl + K)";
    }

    const main = localStorage.getItem("color");

    if (main) document.documentElement.style.setProperty("--mainColor", main);

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
      {/* Google Tag Manager */}
      <Script
        id="google tag manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KVG6T32C');`,
        }}
      />
      {/* End Google Tag Manager */}

      <Script src="../path/to/flowbite/dist/flowbite.min.js" />

      <Head>
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

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KVG6T32C"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Image
        className="fixed left-0 top-0 h-full w-full opacity-[0.02] blur-[5px]"
        src={background}
        alt="Fond"
      />

      <div
        className={`${isVisible ? "" : "hidden"} fixed left-2/4 top-2/4 z-[2026] h-[420px] w-[600px] -translate-x-2/4 -translate-y-2/4 animate-appearCenter border border-neutral-700 text-sm shadow-xl backdrop-blur-md transition-all duration-300 ease-out max-sm:w-full`}
        ref={searchContainerRef}
      >
        <div className="flex h-16 items-center border-b border-neutral-700 bg-[rgb(22,23,29,0.5)] p-2">
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

        <div className="h-[calc(100%-60px)] overflow-y-scroll bg-[rgba(33,35,37,0.27)]">
          {output}
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden bg-black bg-opacity-20"
      ></div>

      <header className="fixed left-0 top-0 z-[2024] flex h-20 w-full justify-center border-b border-b-neutral-700 shadow-lg backdrop-blur-3xl">
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

              <p className="text-3xl font-normal max-md:hidden">
                <span className="font-normal transition-colors group-hover:text-white">
                  Mugiwara-no
                </span>{" "}
                Streaming
              </p>
            </h1>
          </Link>

          <div
            onClick={() => setIsVisible(!isVisible)}
            className="flex cursor-pointer rounded-md border border-neutral-700 bg-[rgba(22,23,29,0.5)] p-2"
          >
            <SearchIcon className="mr-4 w-6" />

            <span ref={searchTextRef} className="flex items-center text-white">
              Recherche rapide&nbsp;
            </span>
          </div>
        </nav>
      </header>

      {children}
    </>
  );
}
