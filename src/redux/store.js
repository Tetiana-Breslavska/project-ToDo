// import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({columns}) => columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const setSearchString = payload => ({ type: 'SET_SEARCH_STRING', payload });


const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
            // break;--?????????????????

        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
            
        case 'SET_SEARCH_STRING':
            return { ...state, searchString: action.payload};

        default:
            return state; 
    }
};


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;