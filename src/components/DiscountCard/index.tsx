import { Link } from 'react-router-dom';
import { CategoryType } from '../../@types/Category';
import { DiscountsType } from '../../@types/Discounts';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IDiscountsCardProps {
  discount: DiscountsType;
  setCategories: (categories: CategoryType[]) => void;
}

const DiscountsCard: React.FC<IDiscountsCardProps> = ({
  discount,
  setCategories,
}) => (
  <div className="card mb-3 w-100">
    <Link to={`${discount.data}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${discount.links})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 primary mb-3">{discount.meta}</h5>
      <Categories
        categories={discount.categorias}
        url="descontos"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {discount.modulos.map(address => (
          <p key={address.id} className="text-muted">
            {address?.route}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default DiscountsCard;
