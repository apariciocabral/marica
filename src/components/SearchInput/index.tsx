import { useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';

interface ISearchInputProps {
  placeholder?: string;
  onSearch(searchText: string): void;
  showCloseButton?: boolean;
  onClickCloseButton(): void;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = 'Search',
  onSearch,
  showCloseButton = false,
  onClickCloseButton,
}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="d-flex">
      <input
        className="form-control"
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button
        className="btn btn-primary fw-bold"
        type="button"
        onClick={() => onSearch(searchText)}
      >
        <MdSearch />
      </button>
      {showCloseButton && (
        <button
          className="btn btn-light ms-2 fw-bold"
          type="button"
          onClick={() => onClickCloseButton()}
        >
          <MdClose />
        </button>
      )}
    </div>
  );
};
