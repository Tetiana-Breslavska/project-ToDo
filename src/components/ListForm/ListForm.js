import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {
    const dispatch = useDispatch();
    const [titleValue, setTitleValue] = useState('');
    const [descrValue, setDescrValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title: titleValue, description:descrValue}));
        setTitleValue('');
        setDescrValue('');
    }

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput value={titleValue} onChange={e => setTitleValue(e.target.value)} />
            <span>Description:</span>
            <TextInput value={descrValue} onChange={e => setDescrValue(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;