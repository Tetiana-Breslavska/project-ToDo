import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { favoriteCards } from '../../redux/store';
import Card from '../Card/Card.js';


const Favorite = () => {
    const cards = useSelector(state => favoriteCards(state.cards));

    return(
        <div className={styles.page_favorite}>
            <PageTitle>Favorite</PageTitle>
            <p>Lorem Ipsum.</p>
            <ul className={styles.favorite_cards}>
                {cards.map(card => <Card key={card.id}
            {...card} />)}
            </ul>
        </div>
    )


    

};

export default Favorite;