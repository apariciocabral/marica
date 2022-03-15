import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface IPageTitleProps {
  title: string;
  subtitle?: string;
  url?: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({
  title,
  subtitle,
  url = '/',
}) => {
  return (
    <div className="d-flex m-0 align-items-center">
      <Link className="fs-4 fw-bold text-dark me-2" to={url}>
        <MdArrowBack />
      </Link>
      <div>
        {subtitle && (
          <Link to={url} className="text-decoration-none text-muted fs-6">
            {subtitle}
          </Link>
        )}
        <p className="text-decoration-none fw-bold mb-0 fs-3">{title}</p>
      </div>
    </div>
  );
};
