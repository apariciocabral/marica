import { Link } from 'react-router-dom';
import { EventSpacesType } from '../../@types/EventSpaces';
import { Categories } from '../Categories';
import { Cover } from './styles';

interface IEventSpacesCardProps {
  eventSpace: EventSpacesType;
}

const EventSpacesCard: React.FC<IEventSpacesCardProps> = ({ eventSpace }) => (
  <div className="card mb-3 w-100">
    <Link to={`${eventSpace.id}`} className="fs-1 text-center">
      <Cover style={{ backgroundImage: `url(${eventSpace.capa})` }} />
    </Link>
    <div className="card-body">
      <h5 className="fs-6 primary mb-3">{eventSpace.nome}</h5>
      <Categories
        categories={eventSpace.categorias}
        url="comercios"
        color="gray"
        size="sm"
      />
      <div className="mt-auto">
        {eventSpace.enderecos.map(endereco => (
          <p key={endereco.id} className="text-muted">
            {endereco.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default EventSpacesCard;
