import { Link } from 'react-router-dom';

export function Title({
  accueil = false,
  link,
}: {
  accueil?: boolean;
  link?: string;
}) {
  const text = accueil ? (
    <h1
      style={{
        marginTop: '20px',
        textAlign: 'left',
      }}
    >
      Le catalogue
    </h1>
  ) : (
    <Link to={link ? '/' + link : '/'} style={{ fontSize: '60px' }}>
      <h1>
        {window.localStorage
          .getItem('anime')
          ?.split(' ')
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join(' ')}
      </h1>
    </Link>
  );

  return <div className="title">{text}</div>;
}
