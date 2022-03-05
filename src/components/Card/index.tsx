import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface ICardProps {
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

export const Card: React.FC<ICardProps> = ({
  icon: Icon,
  title,
  description,
  url,
}) => {
  const isInternal = url.charAt(0) === '/';
  return (
    <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
      <div className="card-body">
        {isInternal ? (
          <>
            <Link to={url}>
              <Icon className="text-dark icon" />
            </Link>
            <Link className="text-decoration-none text-dark" to={url}>
              <h2 className="fs-sm mt-0 mb-1">{title}</h2>
            </Link>
          </>
        ) : (
          <>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon className="text-dark icon" />
            </a>
            <a
              className="text-decoration-none text-dark"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="fs-sm mt-0 mb-1">{title}</h2>
            </a>
          </>
        )}
        <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
          {description}
        </p>
        <div className="mt-auto w-100">
          {isInternal ? (
            <Link to={url} className="button" title={title}>
              Acessar
            </Link>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="button"
              title={title}
            >
              Acessar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
