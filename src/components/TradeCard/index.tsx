import { Link } from 'react-router-dom';
import { CategoryType } from '../../@types/Category';
import { TradesType } from '../../@types/Trades';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface ITradesCardProps {
  trade: TradesType;
  setCategories: (categories: CategoryType[]) => void;
}

const TradesCard: React.FC<ITradesCardProps> = ({ trade, setCategories }) => (
  <div className="card mb-3">
    <Link to={`${trade.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${trade.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{trade.nome}</h5>
      <Categories
        categories={trade.categorias}
        url="comercios"
        color="gray"
        size="sm"
        setCategories={setCategories}
      />
      <div className="mt-auto">
        {trade.enderecos.map(address => (
          <p key={address.id} className="text-muted">
            {address.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default TradesCard;
