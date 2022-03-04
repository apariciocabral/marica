import { Link } from 'react-router-dom';
import { CategoryType } from '../../@types/Category';
import { DeliveriesType } from '../../@types/Deliveries';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IDeliveriesCardProps {
  delivery: DeliveriesType;
  setCategories: (categories: CategoryType[]) => void;
}

const DeliveryCard: React.FC<IDeliveriesCardProps> = ({
  delivery,
  setCategories,
}) => (
  <div className="card mb-3 w-100">
    <Link to={`${delivery.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${delivery.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{delivery.nome}</h5>
      <Categories
        categories={delivery.categorias}
        url="delivery"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {delivery.enderecos.map(address => (
          <p key={address.id} className="text-muted">
            {address.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default DeliveryCard;
