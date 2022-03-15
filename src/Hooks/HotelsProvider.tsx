import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { HotelsType } from '../@types/Hotels';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IHotelsContextProps {
  hotel: HotelsType | null;
  hotels: HotelsType[];
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  errorMessage: string | null;
  setHotel: (hotel: HotelsType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getHotel: (id: number) => Promise<void>;
  getHotels: (text?: string) => Promise<void>;
  getHotelsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const HotelsContext = createContext<IHotelsContextProps>(
  {} as IHotelsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useHotels = (): IHotelsContextProps => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('useHotels must be within HotelsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const HotelsProvider: React.FC = ({ children }) => {
  const [hotel, setHotel] = useState<HotelsType | null>(null);
  const [hotels, setHotels] = useState<HotelsType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getHotelsByCategory = useCallback(
    async (id): Promise<void> => {
      setLoading(true);
      Api.get(`/hoteis-e-pousadas/categorias/${id}`)
        .then(response => {
          setHotels(response.data.collection);
          const categoryToFind = categories.find(c => c.id === id);
          setCategory(categoryToFind ?? null);
          setAlreadyGot(false);
        })
        .catch(() => {
          setHotels([]);
          setCategory(null);
        })
        .finally(() => setLoading(false));
    },
    [categories]
  );

  const getHotel = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/hoteis-e-pousadas/${id}`)
      .then(response => setHotel(response.data.item))
      .catch(() => setHotel(null))
      .finally(() => setLoading(false));
  }, []);

  const getHotels = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/hoteis-e-pousadas/busca?busca=${searchText}`
          : '/hoteis-e-pousadas';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setHotels(response.data.collection);
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
      hotel,
      hotels,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setHotel,
      getHotel,
      getHotels,
      getHotelsByCategory,
    }),
    [
      hotel,
      hotels,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setHotel,
      getHotel,
      getHotels,
      getHotelsByCategory,
    ]
  );

  return (
    <HotelsContext.Provider value={providerValue}>
      {children}
    </HotelsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
