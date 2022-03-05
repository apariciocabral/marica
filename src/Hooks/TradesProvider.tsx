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
  trade: TradesType | null;
  trades: TradesType[];
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  errorMessage: string | null;
  setTrade: (trade: TradesType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getTrade: (id: number) => Promise<void>;
  getTrades: (text?: string) => Promise<void>;
  getTradesByCategory: (id: number) => Promise<void>;
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
    throw new Error('useTrades must be within TradesProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const TradesProvider: React.FC = ({ children }) => {
  const [trade, setTrade] = useState<TradesType | null>(null);
  const [trades, setTrades] = useState<TradesType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getTradesByCategory = useCallback(
    async (id): Promise<void> => {
      setLoading(true);
      Api.get(`/comercios/categorias/${id}`)
        .then(response => {
          setTrades(response.data.collection);
          const categoryToFind = categories.find(c => c.id === id);
          setCategory(categoryToFind ?? null);
          setAlreadyGot(false);
        })
        .catch(() => {
          setTrades([]);
          setCategory(null);
        })
        .finally(() => setLoading(false));
    },
    [categories]
  );

  const getTrade = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/comercios/${id}`)
      .then(response => setTrade(response.data.item))
      .catch(() => setTrade(null))
      .finally(() => setLoading(false));
  }, []);

  const getTrades = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/comercios/busca?busca=${searchText}`
          : '/comercios';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setTrades(response.data.collection);
          setAlreadyGot(true);
        } catch (e) {
          if (e instanceof Error) setErrorMessage(e.message);
        } finally {
          setLoading(false);
        }
      }
    },
    [alreadyGot]
  );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      trade,
      trades,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setTrade,
      getTrade,
      getTrades,
      getTradesByCategory,
    }),
    [
      trade,
      trades,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setTrade,
      getTrade,
      getTrades,
      getTradesByCategory,
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
