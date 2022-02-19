import AndroidImg from '../../assets/app-store.png';
import AppleImg from '../../assets/ios-store.png';

const androidUrl = process.env.REACT_APP_ANDROID_URL ?? '';
const iosUrl = process.env.REACT_APP_IOS_URL ?? '';

export const DownloadApp: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <h3 className="fw-bold text-center mt-5 mb-3">Conheça nosso app</h3>
      <div className="form-row mt-auto text-center text-md-left d-flex">
        <div className="">
          {androidUrl && (
            <a
              href={androidUrl}
              title="Google Play"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={AndroidImg} alt="Google Play" />
            </a>
          )}
        </div>
        <div className="ms-2">
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
  );
};
