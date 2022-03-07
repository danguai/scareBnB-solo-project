import { csrfFetch } from './csrf';

//  A C T I O N S
const ADD_PLACE = 'places/ADD_PLACE';
const UPDATE_PLACE = 'places/UPDATE_PLACE';
const REMOVE_PLACE = 'places/REMOVE_PLACE';

// C R E A T E   P L A C E   A C T I O N
const addPlace = place => {
    return {
        type: ADD_PLACE,
        payload: place,
    };
};

// U P D A T E   P L A C E   A C T I O N
const updatePlace = place => {
    return {
        type: UPDATE_PLACE,
        payload: place,
    };
};

//  R E M O V E   P L A C E   A C T I O N
const removePlace = () => {
    return {
        type: REMOVE_PLACE,
    };
};

//  C R E A T E   P L A C E
export const createPlace = place => async dispatch => {
    const { address, city, state, country, zipcode, price, rating } = place;
    console.log('PLACEPLACEPLACE', place);
    const response = await csrfFetch('/api/places', {
        method: 'POST',
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            zipcode,
            price,
            rating
        })
    }).catch(e => console.log('BEFORE DATA', e));
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return Promise.reject(data);
        }
        dispatch(addPlace(data.place));
        console.log('AFTER DISPATCH', data);
        return response;
    }
    return Promise.reject();
};

// D E L E T E   P L A C E
// export const deletePlace = () => async dispatch => {
//     const response = await csrfFetch('/api/places', {
//         method: 'DELETE'
//     });
//     dispatch(removePlace());
//     return response;
// };

const initialState = { place: null };

const placesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_PLACE:
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case REMOVE_PLACE:
            newState = Object.assign({}, state);
            newState.place = null;
            return newState;
        default:
            return state;
    }
};

export default placesReducer;
