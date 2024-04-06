import { ChangeEvent } from "react";

interface SwitchProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Switch({ placeholder, onChange }: SwitchProps) {
  return (
    <label className="relative -left-5 flex transition-all duration-300 ease-out before:absolute before:-right-12 before:h-7 before:w-12 before:rounded-full before:border before:border-neutral-700 before:border-opacity-50 before:bg-transparent before:transition-all before:duration-200 hover:before:border-opacity-100 has-[:checked]:before:bg-main has-[:checked]:before:brightness-50">
      {placeholder ? <p>{placeholder}</p> : null}

      <input
        type="checkbox"
        className="peer appearance-none"
        onChange={onChange}
      />

      <span className="relative left-6 top-1 h-5 w-5 rounded-full bg-main transition-all duration-200 peer-checked:left-11"></span>
    </label>
  );
}
