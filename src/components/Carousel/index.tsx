import carouselLarge from '../../assets/carouselLarge.jpeg';
import carouselLarge1 from '../../assets/carouselLarge1.jpeg';
import carouselLarge2 from '../../assets/carouselLarge2.jpeg';
import { ContentCarousel } from './styles';

export const Carousel: React.FC = () => {
  return (
    <section className="d-none d-md-block mb-5">
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carouselLarge}
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <a
                className="text-white fs-5"
                href="https://calendario.eventosmarica.com.br/"
                title="Calendário"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={carouselLarge1}
                  className="d-block w-100"
                  alt="carousel"
                />
              </a>
            </div>
            <div className="carousel-item">
              <a
                className="text-white fs-5"
                href="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                title="Roteiros Turísticos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={carouselLarge2}
                  className="d-block w-100"
                  alt="carousel"
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <ContentCarousel className="text-center">
            <ul className="control-dots">
              <li className="cKJzHK">
                <button type="button"> </button>
              </li>
              <li
                value="1"
                title="slide item 2"
                aria-label="slide item 2"
                className="cKJzHK"
              >
                <button type="button"> </button>
              </li>
              <li
                value="2"
                title="slide item 3"
                aria-label="slide item 3"
                className="sc-fzpans cKJzHK"
              >
                <button type="button"> </button>
              </li>
            </ul>
          </ContentCarousel>
        </div>
      </div>
    </section>
  );
};
