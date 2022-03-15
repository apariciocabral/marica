import LoadingCard from './LoadingCard';

interface ILoadingCardsProps {
  show: boolean;
  amount?: number;
}

const LoadingCards: React.FC<ILoadingCardsProps> = ({ show, amount = 12 }) =>
  show ? (
    <div className="container">
      <div className="row row-cols-3 g-3 my-3">
        {[...Array(amount)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="col">
            <LoadingCard />
          </div>
        ))}
      </div>
    </div>
  ) : null;

export default LoadingCards;
