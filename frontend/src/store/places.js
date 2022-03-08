import { csrfFetch } from './csrf';

//  A C T I O N S
const GET_PLACE = 'places/GET_PLACE';
const GET_PLACES = 'places/GET_PLACES';
const CREATE_PLACE = 'places/CREATE_PLACE';
const UPDATE_PLACE = 'places/UPDATE_PLACE';
const REMOVE_PLACE = 'places/REMOVE_PLACE';

// C R E A T E   P L A C E   A C T I O N
const createPlaceAction = place => {
    return {
        type: CREATE_PLACE,
        payload: place,
    };
};

// R E A D   P L A C E   A C T I O N
const getOnePlaceAction = place => {
    return {
        type: GET_PLACE,
        payload: place,
    };
};

// R E A D   P L A C E   A C T I O N
const getPlacesAction = places => {
    return {
        type: GET_PLACES,
        payload: places,
    };
};

// U P D A T E   P L A C E   A C T I O N
const updateOnePlaceAction = place => {
    return {
        type: UPDATE_PLACE,
        payload: place,
    };
};

//  R E M O V E   P L A C E   A C T I O N
const removeOnePlaceAction = () => {
    return {
        type: REMOVE_PLACE,
    };
};

//  C R E A T E   P L A C E
export const createPlace = place => async dispatch => {
    const { address, city, state, country, zipcode, price, rating, userId } = place;
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
            rating,
            userId
        })
    }).catch(e => console.log('BEFORE DATA', e));
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return Promise.reject(data);
        }
        dispatch(createPlaceAction(data.place));
        console.log('AFTER DISPATCH', data, response);
        return response;
    }
    return Promise.reject();
};

//   R E A D   O N E   P L A C E
export const getPlace = id => async dispatch => {
    const response = await fetch(`/api/places/${id}`);

    if (response.ok) {
        const place = await response.json();
        dispatch(getOnePlaceAction(place));
    }
};

//   R E A D  A L L   P L A C E
export const getPlaces = () => async dispatch => {
    const response = await fetch(`/api/place`);

    if (response.ok) {
        const places = await response.json();
        dispatch(getPlacesAction(places));
    }
};

//  U P D A T E   P L A C E
export const updatePlace = data => async dispatch => {
    const response = await fetch(`/api/places/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (response) {
        const place = await response.json();
        dispatch(updateOnePlaceAction(place));
        return place;
    }
};

//  D E L E T E   P L A C E
export const deletePlace = () => async dispatch => {
    const response = await csrfFetch('/api/places', {
        method: 'DELETE'
    });
    dispatch(removeOnePlaceAction());
    return response;
};

const initialState = { place: null };

const placesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_PLACE:
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case UPDATE_PLACE:
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
