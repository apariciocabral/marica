import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { CityEventsType } from '../@types/CityEvents';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface ICityEventsContextProps {
  cityEvent: CityEventsType | null;
  cityEvents: CityEventsType[];
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  errorMessage: string | null;
  setCityEvent: (cityEvent: CityEventsType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getCityEvent: (id: number) => Promise<void>;
  getCityEvents: (text?: string) => Promise<void>;
  getCityEventsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const CityEventsContext = createContext<ICityEventsContextProps>(
  {} as ICityEventsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useCityEvents = (): ICityEventsContextProps => {
  const context = useContext(CityEventsContext);

  if (!context) {
    throw new Error('useCityEvents must be within CityEventsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const CityEventsProvider: React.FC = ({ children }) => {
  const [cityEvent, setCityEvent] = useState<CityEventsType | null>(null);
  const [cityEvents, setCityEvents] = useState<CityEventsType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getCityEventsByCategory = useCallback(
    async (id): Promise<void> => {
      setLoading(true);
      Api.get(`/eventos/categorias/${id}`)
        .then(response => {
          setCityEvents(response.data.collection);
          const categoryToFind = categories.find(c => c.id === id);
          setCategory(categoryToFind ?? null);
          setAlreadyGot(false);
        })
        .catch(() => {
          setCityEvents([]);
          setCategory(null);
        })
        .finally(() => setLoading(false));
    },
    [categories]
  );

  const getCityEvent = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/eventos/${id}`)
      .then(response => setCityEvent(response.data.item))
      .catch(() => setCityEvent(null))
      .finally(() => setLoading(false));
  }, []);

  const getCityEvents = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/eventos/busca?busca=${searchText}`
          : '/eventos';
        try {
          const response = await Api.get(url, {
            params: {
              fields: 'datahora_inicio',
              orderby: 'datahora_inicio',
              order: 'asc',
            },
          });
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setCityEvents(response.data.collection);
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
      cityEvent,
      cityEvents,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setCityEvent,
      getCityEvent,
      getCityEvents,
      getCityEventsByCategory,
    }),
    [
      cityEvent,
      cityEvents,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setCityEvent,
      getCityEvent,
      getCityEvents,
      getCityEventsByCategory,
    ]
  );

  return (
    <CityEventsContext.Provider value={providerValue}>
      {children}
    </CityEventsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
