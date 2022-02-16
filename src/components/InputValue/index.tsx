/* eslint-disable camelcase */
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Icons, LineStyle } from './styles';

interface IInformationsProps {
  title: string;
  preco_t: string;
}

const InputValue: React.FC<IInformationsProps> = ({ title, preco_t }) => (
  <LineStyle className="mt-5">
    <h4 className="line">{title}</h4>
    <div className="d-flex align-items-center">
      <Icons className="fs-5 pe-3">
        <FaRegMoneyBillAlt />
      </Icons>
      <span>{preco_t}</span>
    </div>
  </LineStyle>
);

export default InputValue;
