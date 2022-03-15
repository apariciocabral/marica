/* eslint-disable camelcase */
import { TiCoffee } from 'react-icons/ti';
import { IoMdKey } from 'react-icons/io';
import { FaBed, FaConciergeBell } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { Icons } from './styles';

interface IAccommodationsProps {
  title: string;
  quartos?: number;
  leitos?: number;
  cafe_manha?: boolean;
  cafe_hospedes?: boolean;
  almoco?: boolean;
  almoco_hospedes?: boolean;
  jantar?: boolean;
  jantar_hospedes?: boolean;
}

const Accommodations: React.FC<IAccommodationsProps> = ({
  title,
  quartos,
  cafe_manha,
  cafe_hospedes,
  leitos,
  almoco,
  almoco_hospedes,
  jantar,
  jantar_hospedes,
}) => (
  <div className="mt-5">
    <h2 className=" fs-4 border-2 border-bottom">{title}</h2>
    <div className="fs-5 align-items-center p-0">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          {quartos && (
            <div className="d-flex align-items-center list-unstyled col pb-4">
              <div className="px-2">
                <Icons>
                  <IoMdKey />
                </Icons>
              </div>
              <div className="px-2 m-0">{quartos} quartos</div>
            </div>
          )}
        </div>
        <div className="col-md-6 col-lg-4">
          {leitos && (
            <div className="d-flex align-items-center list-unstyled col pb-4">
              <div className="px-2">
                <Icons>
                  <FaBed />
                </Icons>
              </div>
              <div className="px-2 m-0">{leitos} leitos</div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          {cafe_manha && (
            <div className="d-flex align-items-center list-unstyled col pb-4">
              <div className="px-2">
                <Icons>
                  <TiCoffee />
                </Icons>
              </div>
              <div>
                <p className="fs-6 mb-0">Café da manhã</p>
                {cafe_hospedes ? 'Aceita não-hóspedes' : 'Apenas para hóspedes'}
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6 col-lg-4">
          {almoco && (
            <div className="d-flex align-items-center list-unstyled col pb-4">
              <div className="px-2">
                <Icons>
                  <GiKnifeFork />
                </Icons>
              </div>
              <div>
                <p className="fs-6 mb-0">Almoço</p>
                {almoco_hospedes ? 'Aceita não-hóspedes' : 'Apenas hóspedes'}
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6 col-lg-4">
          {jantar && (
            <div className="d-flex align-items-center list-unstyled col pb-4">
              <div className="px-2">
                <Icons>
                  <FaConciergeBell />
                </Icons>
              </div>
              <div>
                <p className="fs-6 mb-0">Jantar</p>
                {jantar_hospedes ? 'Aceita não-hóspedes' : 'Apenas hóspedes'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Accommodations;
