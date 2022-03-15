import slugify from 'react-slugify';
import { CategoryType } from '../../@types/Category';
import { CategoryOverflow, PillStyles } from './styles';

interface ICategoriesProps {
  categories: CategoryType[];
  url?: string;
  color?: 'primary' | 'secondary' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  setCategories: (categories: CategoryType[]) => void;
}

export const Categories: React.FC<ICategoriesProps> = ({
  categories,
  url,
  color = 'primary',
  size = 'md',
  setCategories,
}) => (
  <CategoryOverflow className="d-flex m-0 list-unstyled">
    {categories.map(category => (
      <li key={category.id}>
        <PillStyles
          onClick={() => setCategories(categories)}
          to={`/${url}/categorias/${category.id}/${slugify(category.label)}`}
          className={`btn btn-${color} btn-${size} me-2 mb-2`}
          title={category.label}
        >
          {`${category.label}${category?.count ? ` (${category?.count})` : ''}`}
        </PillStyles>
      </li>
    ))}
  </CategoryOverflow>
);
