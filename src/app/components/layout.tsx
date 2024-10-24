import React, { ReactNode, useEffect, useRef, useState } from "react";
import { icons } from "lucide-react";
import { cn, random } from "../lib";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FastSearchBar from "./Fast-Searchbar";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const router = useRouter();

  const [output, setOutput] = useState<React.ReactNode>();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const SearchIcon = icons["Search"];
  const Settings = icons["Settings"];
  const Gallery = icons["GalleryVerticalEnd"];

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (href: string) => {
    if (router.pathname.toLowerCase() === href.toLowerCase()) {
      router.back();
    } else {
      router.push(href);
    }
  };

  useEffect(() => {
    localStorage.setItem("filever", random().toString());
    const colorPerso = localStorage.getItem("color");

    if (colorPerso) {
      document.documentElement.style.setProperty("--mainColor", colorPerso);
    }

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
        <meta color="#ff9d00" data-react-helmet="true" name="theme-color" />

        <link rel="icon" href="/Logo.png" />
        <title>Mugiwara-no Streaming</title>
      </Head>

      <div
        className={cn(
          "fixed left-2/4 top-2/4 z-[2026] h-[420px] w-full -translate-x-2/4 -translate-y-2/4 animate-appearCenter border border-neutral-700 bg-zinc-800 bg-opacity-80 text-sm backdrop-blur-md sm:w-[600px] sm:rounded",
          {
            hidden: !isVisible,
          },
        )}
        ref={searchContainerRef}
      >
        <div className="flex h-16 items-center gap-4 border-b border-neutral-700 border-opacity-50 bg-zinc-900 bg-opacity-50 p-4 sm:rounded">
          <SearchIcon className="text-neutral-700" size={20} />

          <FastSearchBar
            className="w-full text-xl"
            setOutput={setOutput}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            searchContainerRef={searchContainerRef}
            inputRef={inputRef}
          />
        </div>

        <div className="h-[calc(100%-64px)] overflow-y-scroll bg-zinc-900 bg-opacity-50 sm:rounded-b-xl">
          {output}
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden bg-black bg-opacity-20"
      ></div>

      <div className="fixed top-0 -z-50 h-full w-full bg-noise opacity-50"></div>

      <header
        className={cn(
          "fixed left-0 top-0 z-[2024] flex h-16 w-full justify-center border-b border-b-transparent transition-all duration-500",
          {
            "border-b-neutral-700 bg-zinc-900 bg-opacity-80 shadow-lg backdrop-blur-3xl":
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

              <p className="text-2xl font-medium transition-colors hover:text-main max-md:hidden">
                Mugiwara-no Streaming
              </p>

              <Image
                src="/palestine.png"
                alt="palestine"
                width={60}
                height={60}
                className="w-10"
              />
            </h1>
          </Link>

          <div className="flex items-center gap-3 *:flex *:items-center *:rounded-md *:p-2">
            <Link
              href="#search"
              className="cursor-pointer bg-zinc-700 bg-opacity-0 transition-all hover:scale-105 hover:bg-opacity-50"
              onClick={() => setIsVisible(!isVisible)}
            >
              <SearchIcon className="lg:mr-3" />

              <span className="text-base text-white max-lg:hidden">
                Recherche rapide (Ctrl + K)
              </span>
            </Link>

            <a
              className={cn(
                "cursor-pointer bg-zinc-700 bg-opacity-0 transition-all hover:scale-105 hover:bg-opacity-50",
                {
                  "bg-opacity-50":
                    router.pathname.toLowerCase() === "/catalogue",
                },
              )}
              onClick={() => handleNavigation("/Catalogue")}
              title="Catalogue"
            >
              <Gallery className="mr-3" />
              <span className="text-base text-white">Catalogue</span>
            </a>

            <a
              className={cn(
                "cursor-pointer bg-zinc-700 bg-opacity-0 transition-all hover:scale-105 hover:bg-opacity-50",
                {
                  "bg-opacity-50":
                    router.pathname.toLowerCase() === "/settings",
                },
              )}
              onClick={() => {
                handleNavigation("/Settings");
              }}
              title="Paramètres"
            >
              <Settings className="lg:mr-3" />

              <span className="text-base text-white max-lg:hidden">
                Paramètres
              </span>
            </a>
          </div>
        </nav>
      </header>

      <script
        id="aclib"
        type="text/javascript"
        src="//acscdn.com/script/aclib.js"
        async
      ></script>

      {children}
    </>
  );
}
