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
}) => (
  <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
    <div className="card-body">
      <Link to={url}>
        <Icon className="text-dark icon" />
      </Link>
      <Link className="text-decoration-none text-dark" to={url}>
        <h2 className="fs-sm mt-0 mb-1">{title}</h2>
      </Link>
      <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
        {description}
      </p>
      <div className="mt-auto w-100">
        <Link to={url} className="button" title="Pontos Turísticos">
          Acessar
        </Link>
      </div>
    </div>
  </div>
);
