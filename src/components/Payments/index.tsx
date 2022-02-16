/* eslint-disable camelcase */
import { PaymentType } from '../../@types/Payment';
import { SVGIcon, WrapTip } from './styles';

interface IPaymentsProps {
  title: string;
  icone: string;
  label: string;
  formas_pagamento: PaymentType[];
}

const Payments: React.FC<IPaymentsProps> = ({ title, formas_pagamento }) => (
  <WrapTip className="mt-5">
    <h4 className="border-bottom border-2 mb-3">{title}</h4>

    <ul className="align-items-center p-0 row row-cols-3">
      {formas_pagamento.map(info => (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <div className="px-2">
            <SVGIcon src={info.icone} />
          </div>
          <span className="px-2 fs-5 m-0">{info.label}</span>
        </li>
      ))}
    </ul>
  </WrapTip>
);

export default Payments;
