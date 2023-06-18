import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim());
    onSubmit(searchName);
    event.target.reset();
  };

  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="sumbit" className={style.button}>
          <span className={style.button_label}>Search</span>
        </button>
        <input
          name="searchName"
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          id="search"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
