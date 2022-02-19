import ContentLoader from 'react-content-loader';

const LoadingPill: React.FC = () => (
  <ContentLoader
    speed={2}
    width="120"
    height={30}
    backgroundColor="#dad5d5"
    foregroundColor="#ebe6e6"
  >
    <rect x="0" y="0" rx="15" ry="15" width="120" height="30" />
  </ContentLoader>
);

export default LoadingPill;
