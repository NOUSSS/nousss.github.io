import React, { ReactNode, useEffect, useRef, useState } from "react";
import background from "@/assets/Background3.jpg";

import { icons } from "lucide-react";

import FastSearchBar from "./FastSearch-bar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [output, setOutput] = useState<React.ReactNode>();
  const [mainColor, setMainColor] = useState<string | null>(null);

  const SearchIcon = icons["Search"];

  useEffect(() => {
    const mainColor = localStorage.getItem("color");

    setMainColor(mainColor);

    if (mainColor)
      document.documentElement.style.setProperty("--mainColor", mainColor);

    setInterval(() => {
      const whiteText = document.querySelector<HTMLElement>(".title h1")!;
      if (whiteText) whiteText.style.color = "var(--mainColor)";

      setTimeout(() => {
        if (whiteText) whiteText.style.color = "white";
      }, 1000);
    }, 2000);

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

  const [isVisible, setIsVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mugiwara-no Streaming" />
        <meta
          property="og:description"
          content="À mon avis c'est le meilleur site pour regarder des animes / films ou lire des scans gratuitement et sans pub."
        />
        <meta
          content={mainColor ?? "#ffea00"}
          data-react-helmet="true"
          name="theme-color"
        />
        <link rel="icon" href="/Logo.png" />

        <title>Mugiwara-no Streaming</title>
      </Head>

      <Image
        className="background fixed left-0 top-0 h-full w-full opacity-[0.02] blur-[5px]"
        src={background}
        alt="Fond"
      />

      <div
        className={`${isVisible ? "" : "hidden"} fixed left-2/4 top-2/4 z-[2026] h-[420px] w-[600px] -translate-x-2/4 -translate-y-2/4 animate-appearCenter border border-[--grey] text-sm shadow-xl backdrop-blur-md transition-all duration-300 ease-out max-sm:w-full`}
        ref={searchContainerRef}
      >
        <div className="flex h-16 items-center border-b border-[--grey] bg-[rgba(_22,_23,_29,_0.5)] p-2">
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

        <div className="h-[calc(100%-60px)] overflow-y-scroll bg-[rgba(33,_35,_37,_0.27)]">
          {output}
        </div>
      </div>

      <header className="fixed left-0 top-0 z-[2024] flex h-20 w-full justify-center border-b border-b-[--grey] bg-[#2123259f] shadow-lg backdrop-blur-3xl">
        <nav className="flex w-full items-center justify-around max-xl:w-[95%] max-xl:justify-between">
          <Link href="/">
            <h1
              className="group flex items-center gap-3 tracking-widest transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });

                const input = document.querySelectorAll("input")[1];

                if (input) {
                  input.value = "";

                  input.dispatchEvent(
                    new KeyboardEvent("keydown", {
                      key: "Backspace",
                      code: "Backspace",
                      keyCode: 8,
                      charCode: 8,
                      bubbles: true,
                    }),
                  );

                  input.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }}
            >
              <Image
                src="/Logo.png"
                alt="Maison"
                width={60}
                height={60}
                className="w-10"
              />

              <p className="text-3xl max-md:hidden">
                <span className="transition-colors group-hover:text-white">
                  Mugiwara-no
                </span>{" "}
                Streaming
              </p>
            </h1>
          </Link>

          <div
            onClick={() => setIsVisible(!isVisible)}
            className="flex cursor-pointer rounded-md border border-[--grey] bg-[rgba(22,_23,_29,_0.5019607843)] p-2"
          >
            <SearchIcon className="mr-4 w-6" />

            <span className="flex items-center text-white">
              Recherche rapide (Ctrl + K)
            </span>
          </div>
        </nav>
      </header>

      {children}
    </>
  );
}
