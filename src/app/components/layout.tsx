import React, { ReactNode, useEffect, useRef, useState } from "react";
import { icons } from "lucide-react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn, restoreLocalStorage } from "../lib";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FastSearchBar from "./Fast-Searchbar";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [output, setOutput] = useState<React.ReactNode>();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const SearchIcon = icons["Search"];
  const Settings = icons["Settings"];
  const Gallery = icons["GalleryVerticalEnd"];

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

    if (
      !localStorage.getItem("episodes") ||
      !localStorage.getItem("scans") ||
      !localStorage.getItem("films")
    )
      restoreLocalStorage();

    const handleScroll = () => {
      const show = window.scrollY > 15;
      setShowBackground(show);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        className={cn(
          "fixed left-2/4 top-2/4 z-[2026] h-[420px] w-full -translate-x-2/4 -translate-y-2/4 animate-appearCenter border border-neutral-700 text-sm shadow-xl backdrop-blur-md sm:w-[600px] sm:rounded-xl",
          {
            hidden: !isVisible,
          },
        )}
        ref={searchContainerRef}
      >
        <div className="flex h-16 items-center gap-4 border-b border-neutral-700 bg-zinc-900 bg-opacity-50 p-2 sm:rounded-t-xl">
          <SearchIcon size={30} />

          <FastSearchBar
            className="w-full text-xl"
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

      <header
        className={cn(
          "fixed left-0 top-0 z-[2024] flex h-16 w-full justify-center border-b border-b-neutral-700 transition-all duration-500",
          {
            "bg-zinc-900 bg-opacity-80 shadow-lg backdrop-blur-3xl":
              showBackground,
          },
        )}
      >
        <nav className="flex w-full items-center justify-around max-xl:w-[95%] max-xl:justify-between">
          <Link href="/">
            <h1
              className="group flex items-center gap-3 tracking-widest"
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

          <div className="flex items-center gap-3 *:flex *:items-center *:rounded-md *:p-2">
            <Link
              className="bg-zinc-700 bg-opacity-0 transition-all hover:bg-opacity-50"
              href="/Catalogue"
              title="Catalogue"
            >
              <Gallery className="mr-3" />

              <span className="text-base text-white">Catalogue</span>
            </Link>

            <Link
              className="bg-zinc-700 bg-opacity-0 transition-all hover:bg-opacity-50"
              href="/Settings"
              title="Paramètres"
            >
              <Settings className="lg:mr-3" />

              <span className="text-base text-white max-lg:hidden">
                Paramètres
              </span>
            </Link>

            <Link
              href="#search"
              className="cursor-pointer bg-zinc-700 bg-opacity-0 transition-all hover:bg-opacity-50"
              onClick={() => setIsVisible(!isVisible)}
            >
              <SearchIcon className="lg:mr-3" />

              <span className="text-base text-white max-lg:hidden">
                Recherche rapide (Ctrl + K)
              </span>
            </Link>
          </div>
        </nav>
      </header>

      <GoogleAnalytics gaId="G-F9N37DQQDM" />

      {children}
    </>
  );
}
