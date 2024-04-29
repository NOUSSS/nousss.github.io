import { useEffect, useRef, useState } from "react";

interface ItemsProps {
  name: string;
  value: string;
  defaultValue: boolean;
}

interface SelectDoubleProps {
  items: ItemsProps[];
  click: (value: string) => void;
}

export default function SelectDouble({ items, click }: SelectDoubleProps) {
  const [selected, setSelected] = useState<HTMLButtonElement>();

  const buttons = useRef<{ [key: string]: HTMLButtonElement }>({});
  const follower = useRef<HTMLDivElement>();

  useEffect(() => {
    if (selected && follower.current) {
      follower.current.style.setProperty(
        "left",
        selected.offsetLeft.toString() + "px",
      );

      selected.style.color = "black";
    } else {
      const defaultSelected = items.find(
        ({ defaultValue }) => defaultValue,
      )?.value;

      if (defaultSelected) {
        setSelected(buttons.current[defaultSelected]);
      }
    }
  }, [selected, follower]);

  return (
    <div className="h-12 w-60 rounded-full bg-zinc-800 bg-opacity-60">
      <div className="relative z-50 flex h-full w-full items-center justify-around text-lg font-normal">
        {items.map(({ name, value }) => (
          <button
            key={value}
            className="h-10 w-28"
            onClick={() => {
              const element = buttons.current[value];

              if (selected) selected.style.color = "white";

              setSelected(element);
              click(value);
            }}
            ref={(el) => (buttons.current[value] = el!)}
          >
            {name}
          </button>
        ))}

        <div
          ref={(el) => (follower.current = el!)}
          className="absolute -z-10 h-10 w-28 rounded-full bg-white shadow-2xl shadow-black transition-all duration-300"
        ></div>
      </div>
    </div>
  );
}
