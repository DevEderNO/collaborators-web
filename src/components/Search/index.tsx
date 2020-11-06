import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch(term: string): void;
}

const Search: React.FC<InputProps> = ({ onSearch, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [term, setTerm] = useState('');

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value);
    },
    [],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const charCode = event.key;

      if (charCode === 'Enter') {
        onSearch(term);
        setTerm('');
      }
    },
    [onSearch, term],
  );

  return (
    <Container isFocused={isFocused}>
      <input
        {...rest}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        value={term}
      />
      <FiSearch size={20} />
    </Container>
  );
};

export default Search;
