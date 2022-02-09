import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { CollectionType } from '../@types/Collection';
import { DiscountsType } from '../@types/Discounts';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IDiscountsContextProps {
  // discount: DiscountsType | null;
  discounts: DiscountsType[];
  categories: CategoryType[];
  collection: CollectionType[];
  isLoading: boolean;
  errorMessage: string | null;
  // setDiscount: (spot: SpotsType | null) => void;
  // getDiscount: (id: number) => Promise<void>;
  getDiscounts: () => Promise<void>;
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
    throw new Error('useSpots must be within DiscountsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const DiscountsProvider: React.FC = ({ children }) => {
  // const [discount, setDiscount] = useState<DiscountsType | null>(null);
  const [discounts, setDiscounts] = useState<DiscountsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [collection, setCollection] = useState<CollectionType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getDiscounts = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/descontos');

        if (Array.isArray(response?.data?.collection)) {
          setDiscounts(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setCollection(response?.data?.collection);
          setAlreadyGot(true);
        } else {
          setDiscounts([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the Discount list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getDiscount = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== discount?.id) {
  //       setLoading(true);
  //       setErrorMessage(null);
  //       try {
  //         const response = await Api.get(`/descontos/${id}`);
  //         if (response?.data?.item) {
  //           setDiscount(response?.data?.item);
  //         } else {
  //           setErrorMessage(
  //             'Could not get the Discount list. Please try again later.'
  //           );
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setErrorMessage(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [discount]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // discount,
      discounts,
      collection,
      categories,
      isLoading,
      errorMessage,
      // setDiscount,
      // getDiscount,
      getDiscounts,
    }),
    [
      // discount,
      discounts,
      collection,
      categories,
      isLoading,
      errorMessage,
      // setDiscount,
      // getDiscount,
      getDiscounts,
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
