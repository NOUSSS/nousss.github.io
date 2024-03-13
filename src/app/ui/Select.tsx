import React, { useRef, useEffect, useState } from "react";
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

  const appear = () => {
    if (labelRef.current && menuRef.current && svgRef.current) {
      if (svgRef.current.classList.contains("rotate-180")) {
        svgRef.current.classList.remove("rotate-180");
        menuRef.current.classList.add("hidden");
      } else {
        svgRef.current.classList.add("rotate-180");
        menuRef.current.classList.remove("hidden");

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
    <div>
      <label
        ref={labelRef}
        className={`label-select relative flex w-64 cursor-pointer items-center justify-between rounded-md border border-[--grey] bg-[rgba(22,_23,_29,_0.5019607843)] bg-opacity-50 p-3 text-white ${className ?? ""}`}
        onClick={appear}
      >
        <p className="placeholder">{placeholder}</p>

        <UpArrow
          ref={svgRef}
          className="transition-all duration-300 ease-out"
        />

        <div
          ref={menuRef}
          className="absolute left-0 top-16 z-[1] hidden max-h-64 w-full animate-appear overflow-y-auto border border-[--grey] bg-[#1b1d21] transition-all duration-300 ease-in-out"
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
                className={
                  item.disabled
                    ? "cursor-default p-1 text-base text-gray-500 transition-all duration-300 ease-out hover:bg-transparent"
                    : "cursor-pointer p-1 text-base transition-all duration-300 ease-out hover:bg-[#212325]"
                }
              >
                {item.name}
              </li>
            </ul>
          ))}
        </div>
      </label>
    </div>
  );
}
