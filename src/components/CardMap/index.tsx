import { Link } from 'react-router-dom';
import { AddressType } from '../../@types/Address';
import { CategoryType } from '../../@types/Category';
import { CityEventsType } from '../../@types/CityEvents';
import { EventSpacesType } from '../../@types/EventSpaces';
import { HotelsType } from '../../@types/Hotels';
import { RestaurantsType } from '../../@types/Restaurants';
import { SpotsType } from '../../@types/Spots';
import { TradesType } from '../../@types/Trades';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface ICardMapProps {
  item:
    | SpotsType
    | RestaurantsType
    | HotelsType
    | TradesType
    | CityEventsType
    | EventSpacesType;
  addresses: AddressType[];
  setCategories: (categories: CategoryType[]) => void;
}

const CardMap: React.FC<ICardMapProps> = ({
  item,
  addresses,
  setCategories,
}) => (
  <div className="card mb-3 w-100">
    <Link to={`${item.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${item.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 primary mb-3">{item.nome}</h5>
      <Categories
        categories={item.categorias}
        url="pontos"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {addresses.map(address => (
          <p key={address.id} className="text-muted">
            {address.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default CardMap;
