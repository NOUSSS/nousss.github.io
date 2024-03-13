import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="fixed left-2/4 top-1/4 mx-auto -translate-x-[50%]">
        <h1 className="text-3xl">🚫 Cette page n'existe pas</h1>

        <p>
          Mais tant que t'es là, j'en profite pour te donner une petite astuce,
          si tu vas dans{" "}
          <Link
            className="cursor-pointer text-[var(--mainColor)] underline"
            href="/"
          >
            l'accueil
          </Link>{" "}
          et que dans la barre de recherche tu écris "nouss prime" tu pourras
          changer la couleur theme du site !
        </p>
      </div>
    </>
  );
};

export default NotFound;
