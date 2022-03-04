import { Link } from 'react-router-dom';
import { AddressType } from '../../@types/Address';
import { CategoryType } from '../../@types/Category';
import { HotelsType } from '../../@types/Hotels';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IHotelsCardProps {
  hotel: HotelsType;
  addresses: AddressType[];
  setCategories: (categories: CategoryType[]) => void;
}

const HotelsCard: React.FC<IHotelsCardProps> = ({
  hotel,
  addresses,
  setCategories,
}) => (
  <div className="card mb-3 w-100">
    <Link to={`${hotel.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${hotel.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{hotel.nome}</h5>
      <Categories
        categories={hotel.categorias}
        url="hoteis-e-pousadas"
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

export default HotelsCard;
