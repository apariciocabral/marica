import { useCallback, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchStyle } from './styles';

interface ISearchInputProps {
  placeholder?: string;
  onSearch(searchText: string): void;
  className: string;
  type: string;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = '',
  onSearch,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleInputKeyUp = useCallback(
    ev => {
      if (ev.key === 'Enter') {
        onSearch(searchText);
      }
    },
    [onSearch, searchText]
  );

  return (
    <SearchStyle>
      <form className="input-display">
        <div className="d-flex flex-grow-1">
          <input
            onChange={e => setSearchText(e.target.value)}
            onKeyUp={handleInputKeyUp}
            value={searchText}
            placeholder={placeholder}
            type="text"
            className="input form-control"
          />
          <button
            onClick={() => onSearch(searchText)}
            type="button"
            className="input color-white"
          >
            <MdSearch />
          </button>
        </div>
      </form>
    </SearchStyle>
  );
};
