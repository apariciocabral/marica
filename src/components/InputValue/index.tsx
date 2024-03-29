/* eslint-disable camelcase */
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Icons, WrapTip } from './styles';

interface IInformationsProps {
  title: string;
  preco_t: string;
  isFree: boolean;
}

const InputValue: React.FC<IInformationsProps> = ({
  title,
  preco_t,
  isFree,
}) => (
  <WrapTip className="mt-5">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>
    <div className="d-flex fs-5 align-items-center">
      <Icons className="fs-5 pe-3">
        <FaRegMoneyBillAlt />
      </Icons>
      <span>{isFree ? 'Gratuito' : preco_t}</span>
    </div>
  </WrapTip>
);

export default InputValue;
