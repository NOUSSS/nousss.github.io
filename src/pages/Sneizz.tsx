import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Aim() {
  const refs = useRef<HTMLDivElement[]>([]);
  const [currentAim, setCurrentAim] = useState<number>();
  const [score, setScore] = useState(0);

  function randomAim() {
    refs.current.forEach((e) => {
      e.classList.add("bg-transparent");
      e.classList.remove("bg-sky-600");
    });

    const random = Math.floor(Math.random() * refs.current.length);
    const element = refs.current[random];

    setCurrentAim(random);

    element.classList.add("bg-sky-600");
    element.classList.remove("bg-transparent");
  }

  useEffect(() => {
    if (refs.current) {
      randomAim();
    }
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
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el!)}
              onClick={() => {
                if (currentAim === i) {
                  randomAim();
                  setScore((state) => state + 1);
                }
              }}
              className="inline-flex size-16 bg-transparent"
            ></div>
          ))}
        </div>
      </main>
    </>
  );
}
