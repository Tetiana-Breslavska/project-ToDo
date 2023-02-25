import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';

const CardForm = props => {
    const [cardValue, setCardValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: cardValue }, props.cardId);
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