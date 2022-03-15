import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { DiscountsType } from '../@types/Discounts';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IDiscountsContextProps {
  discount: DiscountsType | null;
  discounts: DiscountsType[];
  categories: CategoryType[];
  category: CategoryType | null;
  isLoading: boolean;
  errorMessage: string | null;
  setDiscount: (discount: DiscountsType | null) => void;
  setCategories: (categories: CategoryType[]) => void;
  getDiscount: (id: number) => Promise<void>;
  getDiscounts: (text?: string) => Promise<void>;
  getDiscountsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const DiscountsContext = createContext<IDiscountsContextProps>(
  {} as IDiscountsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useDiscounts = (): IDiscountsContextProps => {
  const context = useContext(DiscountsContext);

  if (!context) {
    throw new Error('useSpots must be within SpotsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const DiscountsProvider: React.FC = ({ children }) => {
  const [discount, setDiscount] = useState<DiscountsType | null>(null);
  const [discounts, setDiscounts] = useState<DiscountsType[]>([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getDiscountsByCategory = useCallback(
    async (id): Promise<void> => {
      setLoading(true);
      Api.get(`/descontos/categorias/${id}`)
        .then(response => {
          setDiscounts(response.data.collection);
          const categoryToFind = categories.find(c => c.id === id);
          setCategory(categoryToFind ?? null);
          setAlreadyGot(false);
        })
        .catch(() => {
          setDiscounts([]);
          setCategory(null);
        })
        .finally(() => setLoading(false));
    },
    [categories]
  );

  const getDiscount = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/descontos/${id}`)
      .then(response => setDiscount(response.data.item))
      .catch(() => setDiscount(null))
      .finally(() => setLoading(false));
  }, []);

  const getDiscounts = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/descontos/busca?busca=${searchText}`
          : '/descontos';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setDiscounts(response.data.collection);
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
      discount,
      discounts,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setDiscount,
      getDiscount,
      getDiscounts,
      getDiscountsByCategory,
    }),
    [
      discount,
      discounts,
      categories,
      category,
      isLoading,
      errorMessage,
      setCategories,
      setCategory,
      setDiscount,
      getDiscount,
      getDiscounts,
      getDiscountsByCategory,
    ]
  );

  return (
    <DiscountsContext.Provider value={providerValue}>
      {children}
    </DiscountsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
