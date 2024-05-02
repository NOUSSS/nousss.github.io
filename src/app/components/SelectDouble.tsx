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

interface ButtonsRef {
  [key: string]: HTMLButtonElement;
}

export default function SelectDouble({ items, click }: SelectDoubleProps) {
  const [selected, setSelected] = useState<HTMLButtonElement>();

  const buttons = useRef<ButtonsRef>({});
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
    <div className="h-14 w-64 rounded-full border border-neutral-700 bg-zinc-900 bg-opacity-50">
      <div className="text-md relative z-50 flex h-full w-full items-center justify-around font-normal">
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
          className="absolute -z-10 h-10 w-28 rounded-full bg-white shadow-xl shadow-neutral-800 transition-all duration-300"
        ></div>
      </div>
    </div>
  );
}
