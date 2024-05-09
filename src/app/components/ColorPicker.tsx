import { icons } from "lucide-react";
import { useEffect, useRef } from "react";

const ColorPicker = () => {
  const ResetIcon = icons["RotateCcw"];

  const colorPickerRef = useRef<HTMLButtonElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const main = localStorage.getItem("color");

    const color =
      main ??
      getComputedStyle(document.documentElement).getPropertyValue(
        "--defaultColor",
      );

    if (colorPickerRef.current)
      colorPickerRef.current.style.backgroundColor = color;

    if (colorInputRef.current) colorInputRef.current.value = color;
  }, [colorInputRef.current]);

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        ref={colorPickerRef}
        className="flex size-5 items-center justify-center overflow-hidden rounded-full"
      >
        <input
          className="absolute h-5 w-5 cursor-pointer bg-transparent opacity-0"
          ref={colorInputRef}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const newColor = event.target.value;

            document.documentElement.style.setProperty("--mainColor", newColor);

            localStorage.setItem("color", newColor);

            if (colorPickerRef.current)
              colorPickerRef.current.style.backgroundColor = newColor;
          }}
          type="color"
        />
      </button>

      <button
        onClick={() => {
          const defaultColor = getComputedStyle(
            document.documentElement,
          ).getPropertyValue("--defaultColor");

          document.documentElement.style.setProperty(
            "--mainColor",
            defaultColor,
          );

          localStorage.removeItem("color");

          if (colorPickerRef.current)
            colorPickerRef.current.style.backgroundColor = defaultColor;
        }}
      >
        <ResetIcon className="size-5 cursor-pointer opacity-50 transition-opacity hover:opacity-100" />
      </button>
    </div>
  );
};

export default ColorPicker;
