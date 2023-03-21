import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = cardId => {
        dispatch(toggleCardFavorite(cardId));
    }

    return (
        <li className={styles.card}>
            {props.title} 
            <button className={clsx("fa fa-star-o", props.isFavorite && styles.isActive)} type='submit' onClick = {()=>handleSubmit(props.id)} />
        </li>
        
    )
};

export default Card;