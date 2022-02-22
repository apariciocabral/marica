import { Link } from 'react-router-dom';
import { CategoryType } from '../../@types/Category';
import { RestaurantsType } from '../../@types/Restaurants';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IRestaurantsCardProps {
  restaurant: RestaurantsType;
  setCategories: (categories: CategoryType[]) => void;
}

const RestaurantsCard: React.FC<IRestaurantsCardProps> = ({
  restaurant,
  setCategories,
}) => (
  <div className="card mb-3">
    <Link to={`${restaurant.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${restaurant.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{restaurant.nome}</h5>
      <Categories
        categories={restaurant.categorias}
        url="restaurantes"
        color="gray"
        size="sm"
        setCategories={setCategories}
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
