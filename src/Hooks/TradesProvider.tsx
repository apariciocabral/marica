import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { TradesType } from '../@types/Trades';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface ITradesContextProps {
  // trade: TradesType | null;
  trades: TradesType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  setCategories: (categories: CategoryType[]) => void;
  // setTrade: (trade: TradesType | null) => void;
  // getTrade: (id: number) => Promise<void>;
  getTrades: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const TradesContext = createContext<ITradesContextProps>(
  {} as ITradesContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useTrades = (): ITradesContextProps => {
  const context = useContext(TradesContext);

  if (!context) {
    throw new Error('useSpots must be within TradesProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const TradesProvider: React.FC = ({ children }) => {
  // const [trade, setTrade] = useState<TradesType | null>(null);
  const [trades, setTrades] = useState<TradesType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getTrades = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/comercios');

        if (Array.isArray(response?.data?.collection)) {
          setTrades(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setTrades([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the Trade list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getTrade = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== trade?.id) {
  //       setLoading(true);
  //       setErrorMessage(null);
  //       try {
  //         const response = await Api.get(`/comercios/${id}`);
  //         if (response?.data?.item) {
  //           setTrade(response?.data?.item);
  //         } else {
  //           setErrorMessage(
  //             'Could not get the Trade list. Please try again later.'
  //           );
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setErrorMessage(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [trade]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // trade,
      trades,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setTrade,
      // getTrade,
      getTrades,
    }),
    [
      // trade,
      trades,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setTrade,
      // getTrade,
      getTrades,
    ]
  );

  return (
    <TradesContext.Provider value={providerValue}>
      {children}
    </TradesContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
