/* eslint-disable camelcase */

import { WrapTip } from './styles';

interface ITipsProps {
  title: string;
  dicas_t: string;
}

const Tips: React.FC<ITipsProps> = ({ title, dicas_t }) => (
  <WrapTip>
    <div className="mt-5">
      <h4 className="border-bottom border-2 mb-3">{title}</h4>
      <span className="pre-wrap">{dicas_t}</span>
    </div>
  </WrapTip>
);

export default Tips;
