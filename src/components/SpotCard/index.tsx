import { Link } from 'react-router-dom';
import { SpotsType } from '../../@types/Spots';
import { Cover, Pill } from './styles';

interface ISpotsCardProps {
  spot: SpotsType;
}

const SpotsCard: React.FC<ISpotsCardProps> = ({ spot }) => (
  <div className="card mb-3">
    <Link to={`${spot.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${spot.capa})` }} />
    </Link>
    <div className="card-body d-flex flex-column">
      <h5 className="fs-6 card-title">{spot.nome}</h5>
      <div>
        {spot.categorias.map(category => (
          <Pill>{category.label}</Pill>
        ))}
      </div>
      <div className="mt-auto">
        {spot.enderecos.map(address => (
          <p className="text-muted">{address.label}</p>
        ))}
      </div>
    </div>
  </div>
);

export default SpotsCard;
