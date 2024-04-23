import { ChangeEvent } from "react";

interface SwitchProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Switch({ placeholder, onChange }: SwitchProps) {
  return (
    <label className="relative flex gap-8 transition-all duration-300 ease-out">
      {placeholder ? <p>{placeholder}</p> : null}

      <div className="relative before:absolute before:-right-12 before:h-7 before:w-14 before:rounded-full before:border before:border-neutral-700 before:border-opacity-50 before:bg-transparent before:transition-all before:duration-200 before:hover:border-opacity-100 before:has-[:checked]:bg-main before:has-[:checked]:brightness-50">
        <input
          type="checkbox"
          className="peer appearance-none"
          onChange={onChange}
        />

        <span className="absolute -left-1 top-1 z-50 h-5 w-5 rounded-full bg-main transition-all duration-200 peer-checked:left-6"></span>
      </div>
    </label>
  );
}
