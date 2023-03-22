import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { favoriteCards } from '../../redux/cardRedux';
import Card from '../Card/Card.js';


const Favorite = () => {
    const cards = useSelector(state => favoriteCards(state.cards));
    if (cards.length===0) 
        return (
            <div className={styles.page_favorite}>
                <PageTitle>Favorite</PageTitle>
                <p>You have no favorite cards</p>
            </div>
        )
    return(
        <div className={styles.page_favorite}>
            <PageTitle>Favorite</PageTitle>
            <p>Your top priorities:</p>
            <ul className={styles.favorite_cards}>
                {cards.map(card => <Card key={card.id}
                {...card} />)}
            </ul>
        </div>         
    )


    

};

export default Favorite;