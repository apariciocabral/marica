import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { BannerType } from '../@types/Banner';
import Api from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface BannersContextData {
  banners: BannerType[];
  getBanners: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const BannersContext = createContext<BannersContextData>(
  {} as BannersContextData
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useBanners = (): BannersContextData => {
  const context = useContext(BannersContext);

  if (!context) {
      throw new Error('useBanners must be within BannersProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const BannersProvider: React.FC = ({ children }) => {
  const [banners, setBanners] = useState<BannerType[]>([]);

  const getBanners = useCallback(async (): Promise<void> => {

    Api.get('/banners')
      .then(response => setBanners(response.data))
      .catch(() => setBanners([]))
      .finally(() => setBanners(banners))  
  }, []);


  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
      () => ({
          banners,
          getBanners,
      }),
      [banners, getBanners]
  );

  return (
      <BannersContext.Provider value={providerValue}>
          {children}
      </BannersContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
