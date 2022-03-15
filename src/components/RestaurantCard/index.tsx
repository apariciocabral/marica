import { FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RestaurantsType } from '../../@types/Restaurants';
import { Categories } from '../Categories';
import { Cover, PillDelivery } from './styles';

interface IRestaurantsCardProps {
  restaurant: RestaurantsType;
}

const RestaurantsCard: React.FC<IRestaurantsCardProps> = ({ restaurant }) => (
  <div className="card mb-3 w-100">
    <Link to={`${restaurant.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${restaurant.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 primary mb-3">{restaurant.nome}</h5>

      {!!restaurant.is_delivery && (
        <div className="mb-2">
          <PillDelivery className="px-3">
            <FaMotorcycle className="me-2" />
            Delivery
          </PillDelivery>
        </div>
      )}

      <Categories
        categories={restaurant.categorias}
        url="restaurantes"
        color="gray"
        size="sm"
      />
      <div className="mt-auto">
        {restaurant.enderecos.map(address => (
          <p key={address.id} className="text-muted">
            {address.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default RestaurantsCard;
