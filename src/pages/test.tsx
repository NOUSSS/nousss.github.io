import { restoreLocalStorage } from "@/app/lib/";

export default function Test() {
  return (
    <main className="flex flex-col items-center">
      <button className="btn" onClick={() => restoreLocalStorage()}>
        Restore
      </button>
    </main>
  );
}
