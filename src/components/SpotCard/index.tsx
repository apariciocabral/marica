import { Link } from 'react-router-dom';
import { SpotsType } from '../../@types/Spots';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface ISpotsCardProps {
  spot: SpotsType;
}

const SpotsCard: React.FC<ISpotsCardProps> = ({ spot }) => (
  <div className="card mb-3">
    <Link to={`${spot.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${spot.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 card-title mb-3">{spot.nome}</h5>
      <Categories
        categories={spot.categorias}
        url="pontos"
        color="gray"
        size="sm"
      />
      <div className="mt-auto">
        {spot.enderecos.map(address => (
          <p className="text-muted">{address.label}</p>
        ))}
      </div>
    </div>
  </div>
);

export default SpotsCard;
