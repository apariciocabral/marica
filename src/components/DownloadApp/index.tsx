import AndroidImg from '../../assets/app-store.png';
import AppleImg from '../../assets/ios-store.png';

const androidUrl = process.env.REACT_APP_ANDROID_URL ?? '';
const iosUrl = process.env.REACT_APP_IOS_URL ?? '';

export const DownloadApp: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column col-md-7 mb-4 mb-md-0">
          <h4 className="fw-bold mt-0 mb-4">Conheça nosso app</h4>
          <div className="form-row mt-auto text-center text-md-left d-flex">
            <div className="p-1 col-6 col-md-5 mb-3">
              {androidUrl && (
                <a
                  href={androidUrl}
                  title="Google Play"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid"
                    src={AndroidImg}
                    alt="Google Play"
                  />
                </a>
              )}
            </div>
            <div className="p-1 col-6 col-md-5">
              {iosUrl && (
                <a
                  href={iosUrl}
                  title="App Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="img-fluid" src={AppleImg} alt="App Store" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
