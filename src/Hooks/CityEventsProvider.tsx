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
  // cityEvent: CityEventsType | null;
  cityEvents: CityEventsType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  // setCityEvent: (cityEvents: CityEventsType | null) => void;
  // getCityEvent: (id: number) => Promise<void>;
  getCityEvents: () => Promise<void>;
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
  // const [cityEvent, setCityEvent] = useState<CityEventsType | null>(null);
  const [cityEvents, setCityEvents] = useState<CityEventsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getCityEvents = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/eventos');

        if (Array.isArray(response?.data?.collection)) {
          setCityEvents(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setCityEvents([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the CityEvent list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getCityEvent = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== cityEvent?.id) {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         const response = await Api.get(`/eventos/${id}`);
  //         if (response?.data?.item) {
  //           setCityEvent(response?.data?.item);
  //         } else {
  //           setError('Could not get the CityEvents list. Please try again later.');
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setError(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [cityEvent]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // cityEvent,
      cityEvents,
      categories,
      isLoading,
      errorMessage,
      // setCityEvent,
      // getCityEvent,
      getCityEvents,
    }),
    [
      // cityEvent,
      cityEvents,
      categories,
      isLoading,
      errorMessage,
      // setCityEvent,
      // getCityEvent,
      getCityEvents,
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
