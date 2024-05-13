import { Historique } from "@/typings/types";
import { Trash } from "lucide-react";
import { FC, RefObject, SetStateAction, useRef } from "react";
import { toast } from "sonner";

interface RemoveHistoriqueProps {
  setHistoriques?: (value: SetStateAction<Historique[]>) => void;
}

const RemoveHistorique: FC<RemoveHistoriqueProps> = ({ setHistoriques }) => {
  const confirmRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden bg-black bg-opacity-20"
      ></div>

      <div
        ref={confirmRef}
        className="fixed left-1/2 top-1/2 z-50 hidden w-96 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-neutral-700 shadow-lg max-sm:w-full"
      >
        <div className="absolute inset-0 -z-10 rounded-sm bg-zinc-900 bg-opacity-50 backdrop-blur-3xl"></div>

        <div className="relative flex flex-col items-start justify-start p-4 tracking-normal">
          <div className="text-2xl">Confirmez vous ?</div>

          <p className="mb-12 text-sm opacity-50">
            Vous êtes sur le point de supprimer tout l'historique
          </p>
        </div>

        <div className="relative flex w-full justify-end gap-8 border-t border-neutral-700 p-3 text-sm font-normal text-white *:w-28 *:rounded-lg *:p-2 *:transition-colors">
          <button
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              if (setHistoriques) setHistoriques([]);

              for (const key of Object.keys(localStorage)) {
                if (key === "color" || key === "filever") {
                } else {
                  localStorage.removeItem(key);
                }
              }

              toast.success("L'historique a bien été vidé");

              if (confirmRef.current && overlayRef.current) {
                confirmRef.current.classList.add("hidden");
                overlayRef.current.classList.add("hidden");
              }
            }}
          >
            Oui
          </button>

          <button
            className="border border-red-500 hover:bg-red-800 hover:bg-opacity-20"
            onClick={() => {
              confirmRef.current?.classList.add("hidden");
              overlayRef.current?.classList.add("hidden");
            }}
          >
            Annuler
          </button>
        </div>
      </div>

      <button
        className="btn"
        onClick={() => {
          if (confirmRef.current && overlayRef.current) {
            confirmRef.current.classList.contains("hidden")
              ? confirmRef.current.classList.remove("hidden")
              : confirmRef.current.classList.add("hidden");

            overlayRef.current.classList.contains("hidden")
              ? overlayRef.current.classList.remove("hidden")
              : overlayRef.current.classList.add("hidden");
          }
        }}
      >
        <Trash /> Tout supprimer
      </button>
    </>
  );
};

export default RemoveHistorique;
