import { ChangeEvent, FC } from "react";
import { cn } from "../lib";

interface SwitchProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ placeholder, onChange }) => {
  return (
    <label
      className={cn("group flex items-center gap-2", {
        "flex-col": placeholder,
      })}
    >
      {placeholder && <p>{placeholder}</p>}

      <div className="relative transition-colors before:absolute before:left-0 before:top-0 before:h-7 before:w-14 before:rounded-full before:border before:border-neutral-700 before:border-opacity-50 before:bg-transparent before:transition-all before:hover:border-opacity-100 before:has-[:checked]:bg-main before:has-[:checked]:brightness-50">
        <input
          type="checkbox"
          className="peer appearance-none"
          onChange={onChange}
        />

        <div className="absolute -left-1 top-1 z-50 h-5 w-5 peer-checked:left-10 peer-checked:rotate-180">
          <span className="absolute z-50 h-5 w-5 scale-95 rounded-full bg-main transition-all group-hover:scale-100 group-active:w-6"></span>
        </div>
      </div>
    </label>
  );
};

export default Switch;
