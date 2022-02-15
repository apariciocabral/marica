import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface IPageTitleProps {
  title: string;
  backTo?: string;
  url?: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({
  title,
  backTo = '/',
}) => (
  <div className="d-flex align-items-center my-4">
    <Link
      to={backTo}
      className="fs-4 text-dark ms-0 me-2 d-flex align-items-center"
    >
      <MdArrowBack />
    </Link>
    <h1 className="fs-3 fw-bold m-0">{title}</h1>
  </div>
);
