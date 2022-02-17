/* eslint-disable camelcase */
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Icons, WrapTip } from './styles';

interface IInformationsProps {
  title: string;
  preco_t: string;
}

const InputValue: React.FC<IInformationsProps> = ({ title, preco_t }) => (
  <WrapTip className="mt-5">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>
    <div className="d-flex align-items-center">
      <Icons className="fs-5 pe-3">
        <FaRegMoneyBillAlt />
      </Icons>
      <span>{preco_t}</span>
    </div>
  </WrapTip>
);

export default InputValue;
