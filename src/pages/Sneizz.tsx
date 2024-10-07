import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Aim() {
  const refs = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);

  const [current, setCurrent] = useState<number>();
  const [score, setScore] = useState(0);

  function randomAim() {
    const random = Math.floor(Math.random() * refs.current.length);

    setCurrent(random);
  }

  useEffect(() => {
    if (refs.current) randomAim();
  }, [refs.current]);

  return (
    <>
      <Head>
        <title>Aim Training</title>

        <meta
          property="og:description"
          content="Page dans laquelle Sneizz peut s'entrainer pour devenir meilleur"
        />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="mb-4 mt-8 text-2xl">
          Pour que Sneizz s'entraine vu qu'il en a besoin
        </h1>

        <p className="mb-4 text-2xl">
          Score : <span className="font-normal">{score}</span>
        </p>

        <div className="w-full border border-neutral-700 md:w-[525px]">
          {Array.from({ length: 40 }, (_, i) => {
            if (current === i)
              return (
                <button
                  key={i}
                  ref={(el) => {
                    if (el) {
                      refs.current[i] = el;
                    }
                  }}
                  onClick={() => {
                    if (current === i) {
                      randomAim();
                      setScore((state) => state + 1);
                    }
                  }}
                  className="inline-flex size-16 rounded-lg bg-sky-600"
                ></button>
              );
            else
              return (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) {
                      refs.current[i] = el;
                    }
                  }}
                  className="inline-flex size-16 bg-transparent"
                ></div>
              );
          })}
        </div>
      </main>
    </>
  );
}
