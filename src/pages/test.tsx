import { useScript } from "@/app/lib/hooks/useScript";
import { useEffect, useState } from "react";

export default function test() {
  const [URL, setURL] = useState<string>("");

  useEffect(() => {
    setURL(
      "https://anime-sama.fr/catalogue/one-piece/saison11/vostfr/episodes.js",
    );
  }, []);

  const status = useScript(URL);

  return (
    <main>
      status : {status}
      <br />{" "}
      <button
        className="btn mt-12"
        onClick={() => {
          setURL(URL.replace("vostfr", "vf"));
        }}
      >
        VF
      </button>
    </main>
  );
}
