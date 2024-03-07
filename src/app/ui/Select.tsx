import React from "react";
import { icons } from "lucide-react";

export interface ItemsProps {
  name: string;
  value: string;
}

interface SelectProps {
  items: ItemsProps[];
  placeholder: string;

  onSelect: (value: ItemsProps) => void;
}

export default function Select({ items, placeholder, onSelect }: SelectProps) {
  const UpArrow = icons["ChevronUp"];
  const labelRef = React.useRef<HTMLLabelElement | null>(null);

  const appear = () => {
    const target = document.querySelector(".label-select") as HTMLLabelElement;
    const menu = document.querySelector(".label-select .menu") as HTMLElement;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      menu.classList.add("invisible");
    } else {
      target.classList.add("active");
      menu.classList.remove("invisible");
    }
  };

  const disappear = () => {
    const target = document.querySelector(".label-select") as HTMLLabelElement;
    const menu = document.querySelector(".label-select .menu") as HTMLElement;

    menu.classList.add("invisible");
    target.classList.remove("active");
  };

  React.useEffect(() => {
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

  const handleSelect = ({ value, name }: ItemsProps) => {
    onSelect({ value, name });
    disappear();

    const placeholder = document.querySelector(
      ".label-select .placeholder"
    ) as HTMLElement;

    placeholder.innerText = name;
  };

  return (
    <div>
      <label ref={labelRef} className="label-select" onClick={appear}>
        <p className="placeholder">{placeholder}</p>

        <UpArrow />

        <div className="menu invisible">
          {items.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => {
                  handleSelect(item);
                  appear();
                }}
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
