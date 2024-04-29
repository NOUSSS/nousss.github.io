import { useEffect, useRef, useState } from "react";

export default function Aim() {
  const refs = useRef<HTMLDivElement[]>([]);
  const [currentAim, setCurrentAim] = useState<number>();

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
    <main className="flex flex-col items-center">
      <div className="w-full border border-neutral-700 md:w-[525px]">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el!)}
            onClick={() => {
              if (currentAim === i) randomAim();
            }}
            className="inline-flex size-16 bg-transparent"
          ></div>
        ))}
      </div>
    </main>
  );
}
