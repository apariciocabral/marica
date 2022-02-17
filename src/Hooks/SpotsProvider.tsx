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
  spot: SpotsType | null;
  spots: SpotsType[];
  categories: CategoryType[];
  collection: CollectionType[];
  isLoading: boolean;
  errorMessage: string | null;
  setSpot: (spot: SpotsType | null) => void;
  getSpot: (id: number) => Promise<void>;
  getSpots: (text?: string) => Promise<void>;
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
  const [spot, setSpot] = useState<SpotsType | null>(null);
  const [spots, setSpots] = useState<SpotsType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [collection] = useState<CollectionType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alreadyGot, setAlreadyGot] = useState(false);

  const getSpot = useCallback(async (id): Promise<void> => {
    setLoading(true);
    Api.get(`/pontos/${id}`)
      .then(response => setSpot(response.data.item))
      .catch(() => setSpot(null))
      .finally(() => setLoading(false));
  }, []);

  const getSpots = useCallback(
    async (searchText = ''): Promise<void> => {
      if (!alreadyGot || searchText.length > 0) {
        setLoading(true);
        setErrorMessage(null);

        const url = searchText
          ? `/pontos/busca?busca=${searchText}`
          : '/pontos';
        try {
          const response = await Api.get(url);
          if (!searchText) {
            setCategories(response.data.categorias);
          }
          setSpots(response.data.collection);
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
      spot,
      spots,
      collection,
      categories,
      isLoading,
      errorMessage,
      setSpot,
      getSpot,
      getSpots,
    }),
    [
      spot,
      spots,
      collection,
      categories,
      isLoading,
      errorMessage,
      setSpot,
      getSpot,
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
