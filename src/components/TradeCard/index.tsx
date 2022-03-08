import { Link } from 'react-router-dom';
import { AddressType } from '../../@types/Address';
import { CategoryType } from '../../@types/Category';
import { TradesType } from '../../@types/Trades';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface ITradesCardProps {
  trade: TradesType;
  enderecos: AddressType[];
  setCategories: (categories: CategoryType[]) => void;
}

const TradesCard: React.FC<ITradesCardProps> = ({
  trade,
  enderecos,
  setCategories,
}) => (
  <div className="card mb-3 w-100">
    <Link to={`${trade.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${trade.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 primary mb-3">{trade.nome}</h5>
      <Categories
        categories={trade.categorias}
        url="comercios"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {enderecos.map(endereco => (
          <p key={endereco.id} className="text-muted">
            {endereco.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default TradesCard;
