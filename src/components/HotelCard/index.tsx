import { Link } from 'react-router-dom';
import { HotelsType } from '../../@types/Hotels';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IHotelsCardProps {
  hotel: HotelsType;
}

const HotelsCard: React.FC<IHotelsCardProps> = ({ hotel }) => (
  <div className="card mb-3">
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
      />
      <div className="mt-auto">
        {hotel.enderecos.map(address => (
          <p className="text-muted">{address.label}</p>
        ))}
      </div>
    </div>
  </div>
);

export default HotelsCard;
