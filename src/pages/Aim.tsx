import { useEffect, useRef } from "react";

export default function Aim() {
  const refs = useRef<HTMLDivElement[]>([]);

  function randomAim() {
    console.log(refs.current);

    refs.current.forEach((e) => {
      e.classList.add("bg-transparent");
      e.classList.remove("bg-sky-700");
    });

    const random = Math.floor(Math.random() * refs.current.length);
    const element = refs.current[random];

    element.classList.add("bg-sky-700");
    element.classList.remove("bg-transparent");
  }

  useEffect(() => {
    if (refs.current) {
      randomAim();
    }
  }, [refs.current]);

  return (
    <main className="flex flex-col items-center">
      <div className="w-full border border-neutral-700 md:w-[525px]">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el!)}
            onClick={() => randomAim()}
            className="inline-flex size-12 bg-transparent"
          ></div>
        ))}
      </div>
    </main>
  );
}
