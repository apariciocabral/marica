import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { EventSpacesType } from '../@types/EventSpaces';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IEventSpacesContextProps {
  // eventSpace: EventSpacesType | null;
  eventSpaces: EventSpacesType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  setCategories: (categories: CategoryType[]) => void;
  // setEventSpace: (eventSpace: EventSpacesType | null) => void;
  // getEventSpace: (id: number) => Promise<void>;
  getEventSpaces: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const EventSpacesContext = createContext<IEventSpacesContextProps>(
  {} as IEventSpacesContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useEventSpaces = (): IEventSpacesContextProps => {
  const context = useContext(EventSpacesContext);

  if (!context) {
    throw new Error('useEventSpaces must be within EventSpacesProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const EventSpacesProvider: React.FC = ({ children }) => {
  // const [eventSpace, setEventSpace] = useState<EventSpacesType | null>(null);
  const [eventSpaces, setEventSpaces] = useState<EventSpacesType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getEventSpaces = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/espacos-para-eventos');

        if (Array.isArray(response?.data?.collection)) {
          setEventSpaces(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setEventSpaces([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the EventSpace list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getEventSpace = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== eventSpace?.id) {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         const response = await Api.get(`/espacos-para-eventos/${id}`);
  //         if (response?.data?.item) {
  //           setEventSpace(response?.data?.item);
  //         } else {
  //           setError('Could not get the EventSpaces list. Please try again later.');
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setError(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [eventSpace]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // eventSpace,
      eventSpaces,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setEventSpace,
      // getEventSpace,
      getEventSpaces,
    }),
    [
      // eventSpace,
      eventSpaces,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setEventSpace,
      // getEventSpace,
      getEventSpaces,
    ]
  );

  return (
    <EventSpacesContext.Provider value={providerValue}>
      {children}
    </EventSpacesContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
