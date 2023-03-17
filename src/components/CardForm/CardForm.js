import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';


const CardForm = props => {
    const dispatch = useDispatch();
    const [cardValue, setCardValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: {title: cardValue, columnId:props.columnId} });
        setCardValue('');
        
    }

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={cardValue} onChange={e => setCardValue(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;