import LoadingPill from './LoadingPill';

interface ILoadingPillProps {
  show: boolean;
  amount?: number;
}

const LoadingPills: React.FC<ILoadingPillProps> = ({ show, amount = 12 }) =>
  show ? (
    <div className="container d-flex flex-wrap">
      {[...Array(amount)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="me-2">
          <LoadingPill />
        </div>
      ))}
    </div>
  ) : null;

export default LoadingPills;
