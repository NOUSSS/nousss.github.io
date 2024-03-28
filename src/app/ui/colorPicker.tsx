import { icons } from "lucide-react";
import { useEffect, useRef } from "react";

const ColorPicker = () => {
  const ResetIcon = icons["RotateCcw"];

  const colorPickerRef = useRef<HTMLDivElement | null>(null);
  const colorInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const main = localStorage.getItem("color");

    const color = main ?? "#ffea00";

    if (colorPickerRef.current)
      colorPickerRef.current.style.backgroundColor = color;

    if (colorInputRef.current) colorInputRef.current.value = color;
  }, [colorInputRef]);

  return (
    <div className="m-8 flex items-center justify-center gap-3">
      <div
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
      </div>

      <ResetIcon
        className="size-5 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
        onClick={() => {
          document.documentElement.style.setProperty("--mainColor", "#ffea00");

          localStorage.removeItem("color");

          if (colorPickerRef.current)
            colorPickerRef.current.style.backgroundColor = "#ffea00";
        }}
      />
    </div>
  );
};

export default ColorPicker;
