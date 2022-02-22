import { PillStyle } from './styles';

interface IPillProps {
  url: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}

const Pill: React.FC<IPillProps> = ({
  url,
  color,
  size,
  children,
  onClick,
}) => (
  <PillStyle
    to={url}
    className={`btn btn-${color} btn-${size}`}
    onClick={onClick}
  >
    {children}
  </PillStyle>
);

export default Pill;
