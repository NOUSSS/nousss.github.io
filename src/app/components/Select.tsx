import { FC, useState, useRef, useEffect, RefObject } from "react";
import { icons } from "lucide-react";
import { cn } from "../lib";
import SearchBar from "./SearchBar";

export interface ItemsProps {
  name: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  placeholder: string;
  multiple?: boolean;
  scroll?: boolean;
  parent?: boolean;
  items: ItemsProps[];
  placeholderRef: RefObject<HTMLParagraphElement>;
  onSelect: (value: ItemsProps[]) => void;
  search?: boolean;
}

interface ItemsRef {
  name: string;
  el: HTMLButtonElement;
}

const Select: FC<SelectProps> = ({
  items,
  placeholder,
  onSelect,
  placeholderRef,
  multiple,
  scroll,
  parent,
  search,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ItemsProps[]>([]);
  const [mounted, setMounted] = useState(false);

  const UpArrow = icons["ChevronUp"];

  const labelRef = useRef<HTMLLabelElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement[]>([]);
  const itemsRef = useRef<ItemsRef[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (placeholderRef.current && selectedItems.length === 0) {
      placeholderRef.current.innerText = placeholder;
    }
  }, [selectedItems, placeholder, placeholderRef]);

  const toggleBodyScroll = (toggle: boolean): void =>
    toggle
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

  useEffect(() => toggleBodyScroll(isSelected), [isSelected]);

  const appear = (
    event: React.MouseEvent<HTMLLabelElement | HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (
      searchBarRef.current &&
      searchBarRef.current.contains(event.target as Node)
    ) {
      return;
    }

    setIsSelected(!svgRef.current?.classList.contains("rotate-180"));

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
      className={cn(
        "relative flex min-h-14 w-64 cursor-pointer items-center justify-between rounded-lg border border-neutral-700 bg-zinc-900 bg-opacity-50 p-3 text-white",
        { "ring-2 ring-main": isSelected, "w-full": parent },
      )}
      onClick={(e) => appear(e)}
    >
      <p className="relative left-1 font-normal" ref={placeholderRef}>
        {placeholder}
      </p>

      <UpArrow ref={svgRef} className="transition-all duration-300 ease-out" />

      {mounted && (
        <div
          ref={menuRef}
          className="absolute left-0 top-16 z-50 hidden max-h-64 w-full animate-appear overflow-auto rounded-md text-black shadow-xl backdrop-blur-xl"
        >
          <div
            ref={(e) => {
              if (e) containerRef.current[0] = e;
            }}
            className="bg-white bg-opacity-75 p-2"
          >
            {search && (
              <div ref={searchBarRef}>
                <SearchBar
                  dontClickOutside
                  notFirst
                  iconColor="black"
                  containerRef={containerRef}
                  placeholder="Rechercher..."
                  query="innerText"
                  className="mb-2 flex h-10 w-full cursor-default items-center justify-center bg-transparent bg-opacity-100 text-base shadow-none transition-colors"
                />
              </div>
            )}

            {items?.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();

                  if (!multiple) toggleBodyScroll(false);

                  if (!item.disabled) {
                    handleSelect(item);
                  }
                }}
                ref={(el) => {
                  if (el) {
                    itemsRef.current[index] = {
                      name: item.name,
                      el,
                    };
                  }
                }}
                className={cn(
                  "flex h-8 w-full cursor-default items-center justify-center rounded border border-transparent text-base transition-colors",
                  {
                    "mt-1": multiple,
                    "bg-neutral-700 text-white":
                      selectedItems.find((i) => i.name === item.name) &&
                      multiple,
                    "opacity-50": item.disabled,
                    "hover:border-neutral-700": !item.disabled,
                  },
                )}
              >
                <p className="font-normal">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </label>
  );
};

export default Select;
