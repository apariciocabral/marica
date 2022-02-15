import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Container from '../Container';

type BreadcrumbItemType = {
  title?: string | null;
  backTo?: string;
};

interface BreadcrumbProps {
  data: BreadcrumbItemType[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => (
  <Container>
    <div className="d-flex mb-5">
      {data.map(breadcrumbItem => (
        <div key={breadcrumbItem.title}>
          {breadcrumbItem.backTo ? (
            <Link to={breadcrumbItem.backTo}>
              <AiOutlineArrowLeft />
            </Link>
          ) : (
            breadcrumbItem.title
          )}
        </div>
      ))}
    </div>
  </Container>
);

export default Breadcrumb;
