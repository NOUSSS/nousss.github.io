import { ColorPicker } from "@/app/components/";

export default function Settings() {
  return (
    <main className="border border-neutral-700 bg-zinc-900 bg-opacity-50 p-6 md:mx-24 md:rounded-md xl:mx-44">
      <h1 className="text-left text-2xl">Paramètres</h1>

      <ul className="ml-5 mt-8 flex flex-col gap-4 *:flex *:items-center *:justify-between">
        <li>
          <p>Changer de couleur thème</p>
          <ColorPicker />
        </li>
      </ul>
    </main>
  );
}
