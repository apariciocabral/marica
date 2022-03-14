import { Fragment, useEffect } from 'react';

import { useBanners } from '../../Hooks/BannersProvider';

export const Carousel: React.FC = () => {
  const { banners, isLoading, hasError, getBanners } = useBanners();

  useEffect(() => {
    getBanners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mb-5">
      <div>
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            {hasError && 'Erro ao carregar'}
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {!isLoading &&
              banners.map((banner, index) => (
                <Fragment key={banner.id}>
                  <div
                    className={`carousel-item d-none d-md-block ${
                      index === 0 ? 'active' : ''
                    }`}
                  >
                    {banner.url ? (
                      <a href={banner.url} target="_blank" rel="noreferrer">
                        <img
                          src={banner.image_l}
                          className="d-block w-100"
                          alt="carousel"
                        />
                      </a>
                    ) : (
                      <img
                        src={banner.image_l}
                        className="d-block w-100"
                        alt="carousel"
                      />
                    )}
                  </div>
                  <div
                    className={`carousel-item d-block d-md-none ${
                      index === 0 ? 'active' : ''
                    }`}
                  >
                    {banner.url ? (
                      <a href={banner.url} target="_blank" rel="noreferrer">
                        <img
                          src={banner.image_s}
                          className="d-block w-100"
                          alt="carousel"
                        />
                      </a>
                    ) : (
                      <img
                        src={banner.image_s}
                        className="d-block w-100"
                        alt="carousel"
                      />
                    )}
                  </div>
                </Fragment>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
