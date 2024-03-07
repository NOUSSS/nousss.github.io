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
}

export default function Select({ items, placeholder, onSelect }: SelectProps) {
  const UpArrow = icons["ChevronUp"];
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const appear = () => {
    if (labelRef.current && menuRef.current) {
      if (labelRef.current.classList.contains("active")) {
        labelRef.current.classList.remove("active");
        menuRef.current.classList.add("invisible");
      } else {
        labelRef.current.classList.add("active");
        menuRef.current.classList.remove("invisible");
      }
    }
  };

  const disappear = () => {
    if (labelRef.current && menuRef.current) {
      menuRef.current.classList.add("invisible");
      labelRef.current.classList.remove("active");
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
        ".placeholder"
      ) as HTMLElement;
      placeholderElement.innerText = item.name;
    }
  };

  return (
    <div>
      <label ref={labelRef} className="label-select" onClick={appear}>
        <p className="placeholder">{placeholder}</p>

        <UpArrow />

        <div ref={menuRef} className="menu invisible">
          {items.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => {
                  if (!item.disabled) {
                    handleSelect(item);
                    appear();
                  }
                }}
                className={item.disabled ? "disabled" : ""}
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
