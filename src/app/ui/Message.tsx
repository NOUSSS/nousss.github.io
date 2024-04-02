import { icons } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  message: string;
}

export default function Message({ message }: MessageProps) {
  const [hidden, setHidden] = useState(false);
  const Remove = icons["X"];

  return (
    <>
      {hidden ? null : (
        <div className="relative mx-8 mt-12 rounded-md border border-neutral-700 p-3 text-left text-lg max-md:text-sm">
          <div
            onClick={() => setHidden(true)}
            className="absolute -right-4 -top-4 m-1 cursor-pointer rounded-full bg-zinc-900 p-1"
          >
            <Remove />
          </div>

          {message}
        </div>
      )}
    </>
  );
}
