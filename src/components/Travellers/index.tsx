/* eslint-disable camelcase */
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { TravellerType } from '../../@types/Traveller';
import { Icons, WrapTip } from './styles';

interface ITravellersProps {
  title: string;
  label: string;
  viajantes: TravellerType[];
}

const Travellers: React.FC<ITravellersProps> = ({ title, viajantes }) => (
  <WrapTip className="mt-5">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>

    <ul className="align-items-center p-0 row row-cols-3">
      {viajantes.map(info => (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <Icons className="fs-5 pe-3">
            <AiOutlineCheckCircle />
          </Icons>
          <span className="px-2 fs-5 m-0">{info.label}</span>
        </li>
      ))}
    </ul>
  </WrapTip>
);

export default Travellers;
