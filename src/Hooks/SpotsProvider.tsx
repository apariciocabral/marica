import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import { CategoryType } from '../@types/Category';
import { CollectionType } from '../@types/Collection';
import { SpotsType } from '../@types/Spots';
import { Api } from '../services/Api';

// Aqui é definida a Interface com os tipos de dados de tudo que será disponibilizado "para fora" do Provider
interface ISpotsContextProps {
  // spot: SpotsType | null;
  spots: SpotsType[];
  categories: CategoryType[];
  collection: CollectionType[];
  isLoading: boolean;
  errorMessage: string | null;
  // setSpot: (spot: SpotsType | null) => void;
  // getSpot: (id: number) => Promise<void>;
  getSpots: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const SpotsContext = createContext<ISpotsContextProps>(
  {} as ISpotsContextProps
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
  const { banners, getBanners } = useBanners();
*/
export const useSpots = (): ISpotsContextProps => {
  const context = useContext(SpotsContext);

  if (!context) {
    throw new Error('useSpots must be within SpotsProvider');
  }

  return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const SpotsProvider: React.FC = ({ children }) => {
  // const [spot, setSpot] = useState<SpotsType | null>(null);
  const [spots, setSpots] = useState<SpotsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [collection, setCollection] = useState<CollectionType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getSpots = useCallback(async (): Promise<void> => {
    if (!alreadyGot) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await Api.get('/pontos');

        if (Array.isArray(response?.data?.collection)) {
          setSpots(response?.data?.collection);
          setCategories(response?.data?.categorias);
          setCollection(response?.data?.collection);
          setAlreadyGot(true);
        } else {
          setSpots([]);
          setCategories([]);
          setErrorMessage(
            'Could not get the spot list. Please try again later.'
          );
        }
      } catch (e) {
        if (e instanceof Error) setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [alreadyGot]);

  // const getSpot = useCallback(
  //   async (id: number): Promise<void> => {
  //     if (id !== spot?.id) {
  //       setLoading(true);
  //       setErrorMessage(null);
  //       try {
  //         const response = await Api.get(`/pontos/${id}`);
  //         if (response?.data?.item) {
  //           setSpot(response?.data?.item);
  //         } else {
  //           setErrorMessage(
  //             'Could not get the spot list. Please try again later.'
  //           );
  //         }
  //       } catch (e) {
  //         if (e instanceof Error) setErrorMessage(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   },
  //   [spot]
  // );

  // Aqui são definidas quais informações estarão disponíveis "para fora" do Provider
  const providerValue = useMemo(
    () => ({
      // spot,
      spots,
      collection,
      categories,
      isLoading,
      errorMessage,
      // setSpot,
      // getSpot,
      getSpots,
    }),
    [
      // spot,
      spots,
      collection,
      categories,
      isLoading,
      errorMessage,
      // setSpot,
      // getSpot,
      getSpots,
    ]
  );

  return (
    <SpotsContext.Provider value={providerValue}>
      {children}
    </SpotsContext.Provider>
  );
};

// Agora é só chamar esse provider em volta do Routes:

/*
  <BannersProvider>
      <Routes />
  </BannersProvider>
*/
