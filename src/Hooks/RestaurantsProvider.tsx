import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { CollectionType } from '../@types/Collection';
import { RestaurantsType } from '../@types/Restaurants';

import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IRestaurantsContextProps {
  restaurants: RestaurantsType[];
  restaurant: RestaurantsType | null;
  categories: CategoryType[];
  category: CategoryType | null;
  collection: CollectionType[];
  isLoading: boolean;
  errorMessage: string | null;
  setRestaurant: (restaurant: RestaurantsType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getRestaurant: (id: number) => Promise<void>;
  getRestaurants: (text?: string) => Promise<void>;
  getRestaurantsByCategory: (id: number) => Promise<void>;
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
  const [restaurant, setRestaurant] = useState<RestaurantsType | null>(null);
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [collection] = useState<CollectionType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getRestaurantsByCategory = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/bares-e-restaurantes/categorias/${id}`)
      .then(response => setRestaurants(response.data.collection))
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, []);

  const getRestaurant = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/restaurantes/${id}`)
      .then(response => setRestaurant(response.data.item))
      .catch(() => setRestaurant(null))
      .finally(() => setLoading(false));
  }, []);

  const getRestaurants = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/restaurantes/busca?busca=${searchText}`
          : '/restaurantes';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setRestaurants(response.data.collection);
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
      restaurant,
      restaurants,
      collection,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setRestaurant,
      getRestaurant,
      getRestaurants,
      getRestaurantsByCategory,
    }),
    [
      restaurant,
      restaurants,
      collection,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setRestaurant,
      getRestaurant,
      getRestaurants,
      getRestaurantsByCategory,
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
