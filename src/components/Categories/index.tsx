import { CategoryType } from '../../@types/Category';
import { Pill } from './styles';

interface ICategoriesProps {
  categories: CategoryType[];
  url: string;
  color?: 'primary' | 'secondary' | 'gray';
  size?: 'sm' | 'md' | 'lg';
}

export const Categories: React.FC<ICategoriesProps> = ({
  categories,
  url,
  color = 'primary',
  size = 'md',
}) => (
  <div className="mb-4">
    <ul className="d-flex flex-wrap m-0 list-unstyled">
      {categories.map(category => (
        <li key={category.id}>
          <Pill
            className={`btn btn-${color} btn-${size} me-2 mb-2`}
            title={category.label}
            to={`/${url}/categorias/${category.id}/${category.label}`}
          >
            {category.label}
          </Pill>
        </li>
      ))}
    </ul>
  </div>
);
