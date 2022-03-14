import LoadingOnlyCard from './LoadingOnlyCard';

interface ILoadingCardsProps {
  show: boolean;
  numberOfCards?: number;
}

const LoadingOnlyCards: React.FC<ILoadingCardsProps> = ({
  show,
  numberOfCards = 12,
}) =>
  show ? (
    <div className="container">
      <div className="row row-cols-4 g-3 my-3">
        {[...Array(numberOfCards)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="col">
            <LoadingOnlyCard />
          </div>
        ))}
      </div>
    </div>
  ) : null;

export default LoadingOnlyCards;
