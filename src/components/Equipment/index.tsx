import { AiOutlineCheckCircle } from 'react-icons/ai';
import { EquipmentType } from '../../@types/Equipments';

interface IEquipmentsProps {
  title: string;
  contents?: EquipmentType[];
}

const Spaces: React.FC<IEquipmentsProps> = ({ title, contents }) => (
  <>
    <h4 className="border-bottom border-2 mb-3">{title}</h4>
    <div className="fs-5 row row-cols-1 row-cols-md-3">
      {contents?.map(info => (
        <div key={info.id} className="pb-1">
          <div className="d-flex align-items-center">
            <div className="px-2 fs-5">
              <AiOutlineCheckCircle color="#6ebd00" />
            </div>
            <div>
              {info.label && (
                <div className="px-2 fs-5 m-0">
                  {info.total}x {info.label}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Spaces;
