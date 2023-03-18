import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setSearchString(search));
}

  return (
      <form className={styles.searchForm} onSubmit = {handleSubmit}>
        <TextInput placeholder="Search..." value = {search} onChange = {e =>setSearch (e.target.value)}/>
        <Button><span className="fa fa-search" /></Button> 
      </form>
  );
};


export default SearchForm;