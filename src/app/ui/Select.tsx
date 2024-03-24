import React, { useRef, useEffect } from "react";
import { icons } from "lucide-react";

export interface ItemsProps {
  name: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  items: ItemsProps[];
  placeholder: string;
  onSelect: (value: ItemsProps) => void;
  className?: string;
}

export default function Select({
  items,
  placeholder,
  onSelect,
  className,
}: SelectProps) {
  const UpArrow = icons["ChevronUp"];

  const labelRef = useRef<HTMLLabelElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const appear = () => {
    if (labelRef.current && menuRef.current && svgRef.current) {
      if (svgRef.current.classList.contains("rotate-180")) {
        svgRef.current.classList.remove("rotate-180");
        menuRef.current.classList.add("hidden");

        toggleBodyScroll(false);
      } else {
        svgRef.current.classList.add("rotate-180");
        menuRef.current.classList.remove("hidden");

        toggleBodyScroll(true);

        const lastItem = menuRef.current.childNodes[
          menuRef.current.childNodes.length - 1
        ] as HTMLElement;

        if (
          lastItem.innerText ===
          (labelRef.current.querySelector(".placeholder") as HTMLElement)
            ?.innerText
        ) {
          menuRef.current.scrollTo({
            top: menuRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const disappear = () => {
    if (svgRef.current && menuRef.current) {
      menuRef.current.classList.add("hidden");
      svgRef.current.classList.remove("rotate-180");

      toggleBodyScroll(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        labelRef.current &&
        !labelRef.current.contains(event.target as Node)
      ) {
        disappear();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: ItemsProps) => {
    onSelect(item);
    disappear();

    if (labelRef.current) {
      const placeholderElement = labelRef.current.querySelector(
        ".placeholder",
      ) as HTMLElement;

      placeholderElement.innerText = item.name;
    }
  };

  return (
    <label
      ref={labelRef}
      className={`label-select relative flex w-64 cursor-pointer items-center justify-between rounded-md border border-neutral-700 bg-[rgba(22,_23,_29)] bg-opacity-50 p-3 text-white ${className ?? ""}`}
      onClick={appear}
    >
      <p className="placeholder">{placeholder}</p>

      <UpArrow ref={svgRef} className="transition-all duration-300 ease-out" />

      <div
        ref={menuRef}
        className="absolute left-0 top-14 z-10 hidden max-h-64 w-full animate-appear overflow-y-auto rounded-md bg-white p-2 text-black shadow-xl transition-all duration-200 ease-in-out"
      >
        {items.map((item, index) => (
          <ul key={index}>
            <li
              onClick={() => {
                if (!item.disabled) {
                  handleSelect(item);
                  appear();
                }
              }}
              className={`flex h-9 cursor-default items-center justify-center rounded-md text-base transition-colors ${item.disabled ? "opacity-50 hover:bg-transparent" : "hover:bg-[#3e63dd] hover:text-white"} `}
            >
              <p>{item.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </label>
  );
}
