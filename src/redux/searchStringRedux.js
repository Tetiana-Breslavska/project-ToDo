
//actions
const createActionName = actionName => `app/searchString/${actionName}`;
const SET_SEARCH_STRING = createActionName('SET_SEARCH_STRING');

//action creators
export const setSearchString = payload => ({ type: SET_SEARCH_STRING, payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
        case SET_SEARCH_STRING:
            return action.payload
        default:
            return statePart;
    }
}


export default searchStringReducer;