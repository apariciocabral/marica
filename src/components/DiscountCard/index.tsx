import { Link } from 'react-router-dom';
import { DiscountsType } from '../../@types/Discounts';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IDiscountsCardProps {
  discount: DiscountsType;
}

const DiscountsCard: React.FC<IDiscountsCardProps> = ({ discount }) => (
  <div className="card mb-3">
    <Link to={`${discount.data}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${discount.links})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{discount.meta}</h5>
      <Categories
        categories={discount.categorias}
        url="descontos"
        color="gray"
        size="sm"
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
