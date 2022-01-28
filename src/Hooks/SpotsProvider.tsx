import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { SpotsType } from '../@types/Spots';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface ISpotsContextProps {
  spots: SpotsType[];
  isLoading: boolean;
  hasError: boolean;
  getSpots: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const SpotsContext = createContext<ISpotsContextProps>(
  {} as ISpotsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useSpots = (): ISpotsContextProps => {
  const context = useContext(SpotsContext);

  if (!context) {
    throw new Error('useSpots must be within SpotsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const SpotsProvider: React.FC = ({ children }) => {
  const [spots, setSpots] = useState<SpotsType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getSpots = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setError(false);

      Api.get('/pontos')
        .then(response => {
          setAlreadyGot(true);
          setSpots(response.data);
        })
        .catch(() => {
          setSpots([]);
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  }, [alreadyGot]);

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      spots,
      isLoading,
      hasError,
      getSpots,
    }),
    [spots, isLoading, hasError, getSpots]
  );

  return (
    <SpotsContext.Provider value={providerValue}>
      {children}
    </SpotsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
