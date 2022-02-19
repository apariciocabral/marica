import { StructureType } from '../../@types/Structure';
import { SVGIcon, WrapTip } from './styles';

interface IInformationsProps {
  title: string;
  estruturas: StructureType[];
}

const Informations: React.FC<IInformationsProps> = ({ title, estruturas }) => (
  <WrapTip className="mt-4">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>
    <ul className="align-items-center p-0 row row-cols-3">
      {estruturas.map(info => (
        <li
          key={info.label}
          className="d-flex align-items-center list-unstyled col pb-4"
        >
          <div className="px-2">
            <SVGIcon src={info.icone} />
          </div>
          <span className="px-2 fs-5 m-0">{info.label}</span>
        </li>
      ))}
    </ul>
  </WrapTip>
);

export default Informations;
