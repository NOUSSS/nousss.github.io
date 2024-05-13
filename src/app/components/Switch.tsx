import { ChangeEvent, FC } from "react";

interface SwitchProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ placeholder, onChange }) => {
  return (
    <label className="flex gap-8">
      {placeholder && <p>{placeholder}</p>}

      <div className="relative transition-colors before:absolute before:left-0 before:top-0 before:h-7 before:w-14 before:rounded-full before:border before:border-neutral-700 before:border-opacity-50 before:bg-transparent before:transition-all before:hover:border-opacity-100 before:has-[:checked]:bg-main before:has-[:checked]:brightness-50">
        <input
          type="checkbox"
          className="peer appearance-none"
          onChange={onChange}
        />

        <span className="absolute left-1 top-1 z-50 h-5 w-5 rounded-full bg-main transition-all peer-checked:left-8"></span>
      </div>
    </label>
  );
};

export default Switch;
