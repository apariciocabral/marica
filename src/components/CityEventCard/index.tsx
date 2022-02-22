import { Link } from 'react-router-dom';
import { CategoryType } from '../../@types/Category';
import { CityEventsType } from '../../@types/CityEvents';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface ICityEventsCardProps {
  cityEvent: CityEventsType;
  setCategories: (categories: CategoryType[]) => void;
}

const CityEventsCard: React.FC<ICityEventsCardProps> = ({
  cityEvent,
  setCategories,
}) => (
  <div className="card mb-3">
    <Link to={`${cityEvent.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${cityEvent.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{cityEvent.nome}</h5>
      <Categories
        categories={cityEvent.categorias}
        url="espacos-para-eventos"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {cityEvent.enderecos.map(address => (
          <p key={address.id} className="text-muted">
            {address.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default CityEventsCard;
