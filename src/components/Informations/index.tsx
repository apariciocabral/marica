import { SVGIcon } from './styles';
import { StructureType } from '../../@types/Structure';

interface IInformationsProps {
  title: string;
  estruturas: StructureType[];
}

const Informations: React.FC<IInformationsProps> = ({ title, estruturas }) => (
  <div className="mt-5">
    <h1 className="">{title}</h1>
    <ul className="align-items-center p-0 row row-cols-3">
      {estruturas.map(info => (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <div className="px-2">
            <SVGIcon src={info.icone} />
          </div>
          <h2 className="px-2 fs-5 m-0">{info.label}</h2>
        </li>
      ))}
    </ul>
  </div>
);

export default Informations;
