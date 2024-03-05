import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <h1>🚫 Cette page n'existe pas</h1>

        <p>
          Mais tant que t'es là, j'en profite pour te donner une petite astuce,
          si tu vas dans <Link href="/">l'accueil</Link> et que dans la barre de
          recherche tu écris "nouss prime" tu pourras changer la couleur theme
          du site !
        </p>
      </div>
    </>
  );
};

export default NotFound;
