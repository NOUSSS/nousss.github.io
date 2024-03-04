import React, { ReactNode, useEffect, useRef, useState } from "react";
import background from "../../assets/Background3.jpg";

import { icons } from "lucide-react";

import FastSearchBar from "./FastSearch-bar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [output, setOutput] = useState<React.ReactNode>();

  const SearchIcon = icons["Search"];

  useEffect(() => {
    const mainColor = localStorage.getItem("color");

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
        "background: #1d1e20",
        "display: inline-block",
        "padding: 1rem 3rem",
        "border: 1px solid #04fbb7",
        "border-radius: 2px;",
      ].join(";")
    );
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

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
        <meta content="#ff7300" data-react-helmet="true" name="theme-color" />
        <link rel="icon" href="/Logo.png" />

        <title>Mugiwara-no Streaming</title>
      </Head>

      <Image className="background" src={background} alt="Fond" />
      <div
        className={`search--container ${isVisible ? "" : "invisible"}`}
        ref={searchContainerRef}
      >
        <div className="input">
          <SearchIcon size="35px" />

          <FastSearchBar
            setOutput={setOutput}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            searchContainerRef={searchContainerRef}
          />
        </div>

        <div className="results">{output}</div>
      </div>

      <header>
        <nav>
          <Link href="/">
            <h1
              className="logo"
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
                    })
                  );

                  input.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }}
            >
              <Image src="/Logo.png" alt="Maison" width={60} height={60} />

              <p>
                <span>Mugiwara-no</span> Streaming
              </p>
            </h1>
          </Link>

          <div onClick={() => setIsVisible(!isVisible)} className="SearchBar">
            <SearchIcon />

            <span>Recherche rapide (Ctrl + K)</span>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
