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
  eventSpace: EventSpacesType | null;
  eventSpaces: EventSpacesType[];
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  errorMessage: string | null;
  setEventSpace: (eventSpace: EventSpacesType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getEventSpace: (id: number) => Promise<void>;
  getEventSpaces: (text?: string) => Promise<void>;
  getEventSpacesByCategory: (id: number) => Promise<void>;
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
  const [eventSpace, setEventSpace] = useState<EventSpacesType | null>(null);
  const [eventSpaces, setEventSpaces] = useState<EventSpacesType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getEventSpacesByCategory = useCallback(
    async (id): Promise<void> => {
      setLoading(true);
      Api.get(`/espacos/categorias/${id}`)
        .then(response => {
          setEventSpaces(response.data.collection);
          const categoryToFind = categories.find(c => c.id === id);
          setCategory(categoryToFind ?? null);
          setAlreadyGot(false);
        })
        .catch(() => {
          setEventSpaces([]);
          setCategory(null);
        })
        .finally(() => setLoading(false));
    },
    [categories]
  );

  const getEventSpace = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/espacos/${id}`)
      .then(response => setEventSpace(response.data.item))
      .catch(() => setEventSpace(null))
      .finally(() => setLoading(false));
  }, []);

  const getEventSpaces = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/espacos/busca?busca=${searchText}`
          : '/espacos';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setEventSpaces(response.data.collection);
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
      eventSpace,
      eventSpaces,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setEventSpace,
      getEventSpace,
      getEventSpaces,
      getEventSpacesByCategory,
    }),
    [
      eventSpace,
      eventSpaces,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setEventSpace,
      getEventSpace,
      getEventSpaces,
      getEventSpacesByCategory,
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
