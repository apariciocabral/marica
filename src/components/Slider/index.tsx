import Slider from 'react-slick';
import { ImageType } from '../../@types/Image';
import { Cover } from './styles';

interface ISpotSliderProps {
  images: ImageType[];
}

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const SpotSlider: React.FC<ISpotSliderProps> = ({ images }) => (
  <div>
    <Slider
      className="mb-3"
      dots
      infinite
      speed={500}
      autoplay
      autoplaySpeed={3000}
      slidesToShow={4}
      slidesToScroll={1}
      initialSlide={0}
      responsive={responsive}
      pauseOnHover
    >
      {images.map(image => (
        <div key={image.id}>
          <Cover style={{ backgroundImage: `url(${image.src})` }} />
        </div>
      ))}
    </Slider>
  </div>
);

export default SpotSlider;
