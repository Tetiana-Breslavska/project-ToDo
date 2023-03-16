import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = props => {
    const [titleValue, setTitleValue] = useState('');
    const [iconValue, setIconValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: titleValue, icon:iconValue});
        setTitleValue('');
        setIconValue('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput value={titleValue} onChange={e => setTitleValue(e.target.value)} />
            <span>Icon:</span>
            <TextInput value={iconValue} onChange={e => setIconValue(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;