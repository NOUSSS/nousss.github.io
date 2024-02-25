import { Link } from 'react-router-dom';

export function Title({
  accueil = false,
  link,
}: {
  accueil?: boolean;
  link?: string;
}) {
  return accueil ? (
    <div className="title">
      <h1
        style={{
          marginTop: '20px',
        }}
      >
        Le catalogue
      </h1>
      <p
        style={{
          fontSize: '15px',
        }}
      >
        made by sneizz
      </p>
    </div>
  ) : (
    <div className="title">
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
    </div>
  );
}
