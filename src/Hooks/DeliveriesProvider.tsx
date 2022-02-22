import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { DeliveriesType } from '../@types/Deliveries';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface IDeliveriesContextProps {
  // delivery: DeliveriesType | null;
  deliveries: DeliveriesType[];
  categories: CategoryType[];
  isLoading: boolean;
  errorMessage: string | null;
  setCategories: (categories: CategoryType[]) => void;
  // setDelivery: (delivery: DeliveriesType | null) => void;
  // getDelivery: (id: number) => Promise<void>;
  getDeliveries: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const DeliveriesContext = createContext<IDeliveriesContextProps>(
  {} as IDeliveriesContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useDeliveries = (): IDeliveriesContextProps => {
  const context = useContext(DeliveriesContext);

  if (!context) {
    throw new Error('useDeliveries must be within DeliveriesProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const DeliveriesProvider: React.FC = ({ children }) => {
  // const [delivery, setDelivery] = useState<DeliveriesType | null>(null);
  const [deliveries, setDeliveries] = useState<DeliveriesType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getDeliveries = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/delivery');

        if (Array.isArray(response?.data?.collection)) {
          setDeliveries(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setAlreadyGot(true);
        } else {
          setDeliveries([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the Delivery list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getDelivery = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== delivery?.id) {
  //       setLoading(true);
  //       setErrorMessage(null);
  //       try {
  //         const response = await Api.get(`/delivery/${id}`);
  //         if (response?.data?.item) {
  //           setDelivery(response?.data?.item);
  //         } else {
  //           setErrorMessage(
  //             'Could not get the Delivery list. Please try again later.'
  //           );
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setErrorMessage(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [delivery]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // delivery,
      deliveries,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setDelivery,
      // getDelivery,
      getDeliveries,
    }),
    [
      // delivery,
      deliveries,
      categories,
      isLoading,
      errorMessage,
      setCategories,
      // setDelivery,
      // getDelivery,
      getDeliveries,
    ]
  );

  return (
    <DeliveriesContext.Provider value={providerValue}>
      {children}
    </DeliveriesContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
