import React, { useState, useRef, useEffect, RefObject } from "react";
import { icons } from "lucide-react";

export interface ItemsProps {
  name: string;
  value: string;

  disabled?: boolean;
}

interface SelectProps {
  placeholder: string;
  multiple?: boolean;
  scroll?: boolean;

  items: ItemsProps[];
  placeholderRef: RefObject<HTMLParagraphElement>;

  onSelect: (value: ItemsProps[]) => void;
}

interface ItemsRef {
  name: string;
  el: HTMLLIElement;
}

export default function Select({
  items,
  placeholder,
  onSelect,
  placeholderRef,
  multiple,
  scroll,
}: SelectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ItemsProps[]>([]);

  const UpArrow = icons["ChevronUp"];

  const labelRef = useRef<HTMLLabelElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const itemsRef = useRef<ItemsRef[]>([]);

  useEffect(() => {
    if (selectedItems.length === 0) {
      if (placeholderRef.current) {
        placeholderRef.current.innerText = placeholder;
      }
    }
  }, [selectedItems]);

  const toggleBodyScroll = (toggle: boolean): void => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => toggleBodyScroll(isSelected), [isSelected]);

  const appear = () => {
    setIsSelected(true);

    if (labelRef.current && menuRef.current && svgRef.current) {
      if (svgRef.current.classList.contains("rotate-180")) {
        svgRef.current.classList.remove("rotate-180");
        menuRef.current.classList.add("hidden");
      } else {
        svgRef.current.classList.add("rotate-180");
        menuRef.current.classList.remove("hidden");

        if (placeholderRef.current && itemsRef.current && scroll) {
          const lastSelectedItem = placeholderRef.current.innerText;
          const lastSelectedItemElement = itemsRef.current.find(
            ({ name }) => name === lastSelectedItem,
          )?.el;

          menuRef.current.scrollTo({
            top: lastSelectedItemElement?.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const disappear = () => {
    setIsSelected(false);

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
    let updatedSelectedItems;

    if (!multiple) {
      updatedSelectedItems = [item];

      setSelectedItems(updatedSelectedItems);
      onSelect(updatedSelectedItems);

      if (placeholderRef.current) {
        placeholderRef.current.innerText = item.name;
      }

      disappear();
    } else {
      if (selectedItems.some((i) => i.value === item.value)) {
        updatedSelectedItems = selectedItems.filter(
          (i) => i.value !== item.value,
        );
      } else {
        updatedSelectedItems = [...selectedItems, item];
      }

      setSelectedItems(updatedSelectedItems);
      onSelect(updatedSelectedItems);

      if (placeholderRef.current) {
        placeholderRef.current.innerText = updatedSelectedItems
          .map(({ name }) => name)
          .join(", ");
      }
    }
  };

  return (
    <label
      ref={labelRef}
      className={`relative flex w-64 cursor-pointer items-center justify-between rounded-md border border-neutral-700 bg-zinc-900 bg-opacity-50 p-3 text-white ${isSelected ? "outline outline-1 outline-main" : ""}`}
      onClick={appear}
    >
      <p className="placeholder" ref={placeholderRef}>
        {placeholder}
      </p>

      <UpArrow ref={svgRef} className="transition-all duration-300 ease-out" />

      <div
        ref={menuRef}
        className="select absolute left-0 top-14 z-10 hidden max-h-64 w-full animate-appear overflow-auto rounded-md bg-white p-2 text-black shadow-xl transition-all duration-200 ease-in-out"
      >
        {items?.map((item, index) => (
          <ul key={index}>
            <li
              onClick={() => {
                if (!multiple) toggleBodyScroll(false);

                if (!item.disabled) {
                  handleSelect(item);
                  appear();
                }
              }}
              ref={(el) =>
                (itemsRef.current[index] = {
                  name: item.name,
                  el: el!,
                })
              }
              className={`${multiple ? "mt-1" : ""} flex h-8 cursor-default items-center justify-center rounded-md text-base transition-colors ${item.disabled ? "opacity-50" : "hover:bg-orange-500 hover:text-white"} ${selectedItems.find((i) => i.name === item.name) && multiple ? "bg-orange-500 text-white" : ""}`}
            >
              <p>{item.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </label>
  );
}
