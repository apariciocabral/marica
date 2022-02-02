import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { RestaurantsType } from '../@types/Restaurants';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IRestaurantsContextProps {
  // restaurant: RestaurantsType | null;
  restaurants: RestaurantsType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  // setRestaurant: (restaurant: RestaurantsType | null) => void;
  // getRestaurant: (id: number) => Promise<void>;
  getRestaurants: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const RestaurantsContext = createContext<IRestaurantsContextProps>(
  {} as IRestaurantsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useRestaurants = (): IRestaurantsContextProps => {
  const context = useContext(RestaurantsContext);

  if (!context) {
    throw new Error('useRestaurants must be within RestaurantsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const RestaurantsProvider: React.FC = ({ children }) => {
  // const [restaurant, setRestaurant] = useState<RestaurantsType | null>(null);
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getRestaurants = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/bares-e-restaurantes');

        if (Array.isArray(response?.data?.collection)) {
          setRestaurants(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setRestaurants([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the Restaurant list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getRestaurant = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== restaurant?.id) {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         const response = await Api.get(`/bares-e-restaurantes/${id}`);
  //         if (response?.data?.item) {
  //           setRestaurant(response?.data?.item);
  //         } else {
  //           setError('Could not get the Restaurants list. Please try again later.');
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setError(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [restaurant]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // restaurant,
      restaurants,
      categories,
      isLoading,
      errorMessage,
      // setRestaurant,
      // getRestaurant,
      getRestaurants,
    }),
    [
      // restaurant,
      restaurants,
      categories,
      isLoading,
      errorMessage,
      // setRestaurant,
      // getRestaurant,
      getRestaurants,
    ]
  );

  return (
    <RestaurantsContext.Provider value={providerValue}>
      {children}
    </RestaurantsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
