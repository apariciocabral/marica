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
  // hotel: HotelsType | null;
  hotels: HotelsType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  // setHotel: (hotel: HotelsType | null) => void;
  // getHotel: (id: number) => Promise<void>;
  getHotels: () => Promise<void>;
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
  // const [hotel, setHotel] = useState<HotelsType | null>(null);
  const [hotels, setHotels] = useState<HotelsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getHotels = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/hoteis-e-pousadas');

        if (Array.isArray(response?.data?.collection)) {
          setHotels(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setHotels([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the hotel list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getHotel = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== hotel?.id) {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         const response = await Api.get(`/hoteis-e-pousadas/${id}`);
  //         if (response?.data?.item) {
  //           setHotel(response?.data?.item);
  //         } else {
  //           setError('Could not get the Hotels list. Please try again later.');
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setError(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [hotel]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // hotel,
      hotels,
      categories,
      isLoading,
      errorMessage,
      // setHotel,
      // getHotel,
      getHotels,
    }),
    [
      // hotel,
      hotels,
      categories,
      isLoading,
      errorMessage,
      // setHotel,
      // getHotel,
      getHotels,
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
