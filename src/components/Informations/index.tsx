import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GeneralInfoType } from '../../@types/GeneralInfo';
import { SVGIcon, WrapTip } from './styles';

interface IInformationsProps {
  title: string;
  contents?: GeneralInfoType[];
}

const Informations: React.FC<IInformationsProps> = ({ title, contents }) => (
  <WrapTip className="mt-4">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>
    <div className="align-items-center p-0 row row-cols-1 row-cols-md-3 row-cols-sm-1">
      {contents?.map(info => (
        <div
          key={info.label}
          className="d-flex align-items-center list-unstyled col pb-4"
        >
          <div className="px-2 fs-4">
            {info.icone ? (
              <SVGIcon src={info.icone} />
            ) : (
              <AiOutlineCheckCircle color="#6ebd00" />
            )}
          </div>
          <span className="px-2 fs-5 m-0">{info.label}</span>
        </div>
      ))}
    </div>
  </WrapTip>
);

export default Informations;
