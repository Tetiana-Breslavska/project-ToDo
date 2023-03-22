import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardRedux';

const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = cardId => {
        dispatch(toggleCardFavorite(cardId));
    }

    const handleSubmitRemove = cardId => {
        console.log (cardId)
        dispatch(removeCard(cardId));
    }




    return (
        <li className={styles.card}>
            {props.title} 
            <div>
                <button className={clsx("fa fa-star-o", props.isFavorite && styles.isActive)} type='submit' onClick = {()=>handleSubmit(props.id)} />
                <button className="fa fa-trash" type='submit' onClick = {()=>handleSubmitRemove(props.id)} />
            </div>
        </li>
        
    )
};

export default Card;