import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <h1>🚫 Cette page n&apos;existe pas</h1>

        <p>
          Mais tant que t&apos;es là, j&apos;en profite pour te donner une
          petite astuce, si tu vas dans <Link href="/">l&apos;accueil</Link> et
          que dans la barre de recherche tu écris &quot;nouss prime&quot; tu
          pourras changer la couleur theme du site !
        </p>
      </div>
    </>
  );
};

export default NotFound;
