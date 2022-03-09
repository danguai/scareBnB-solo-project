import { csrfFetch } from './csrf';

//   S

const CREATE_PLACE = 'places/CREATE_PLACE';
const READ_PLACE = 'places/READ_PLACE';
const UPDATE_PLACE = 'places/UPDATE_PLACE';
const DELETE_PLACE = 'places/DELETE_PLACE';

const READ_PLACES = 'places/READ_PLACES';

// C R E A T E   P L A C E
const createPlaceAction = place => {
    return {
        type: CREATE_PLACE,
        payload: place,
    };
};

// R E A D   P L A C E
const getOnePlaceAction = place => {
    return {
        type: READ_PLACE,
        payload: place,
    };
};

// R E A D   P L A C E S
const getPlacesAction = places => {
    return {
        type: READ_PLACES,
        payload: places,
    };
};

// U P D A T E   P L A C E
const updateOnePlaceAction = place => {
    return {
        type: UPDATE_PLACE,
        payload: place,
    };
};

//  R E M O V E   P L A C E
const removeOnePlaceAction = () => {
    return {
        type: DELETE_PLACE,
    };
};


//  C R E A T E   P L A C E
export const createPlace = place => async dispatch => {
    const { address, city, state, country, zipcode, price, rating, userId } = place;
    console.log('PLACEPLACEPLACE', place);
    try {

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
        });
        console.log('RESPONSE', response);
        if (response.ok) {
            const data = await response.json();
            if (data.errors) {
                return Promise.reject(data);
            }
            dispatch(createPlaceAction(data.place));
            console.log('AFTER DISPATCH', data, response);
            return response;
        }
    } catch (e) {
        console.log('ERROR', e);
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

//   R E A D  A L L  P L A C E S
export const getPlaces = () => async dispatch => {
    const response = await fetch(`/api/places`);

    console.log('PLACEPLACEPLACE', response);


    if (response.ok) {
        const places = await response.json();
        dispatch(getPlacesAction(places));
    }
};

//   R E D U C E R S
const initialState = { place: null };

const sorPlaces = places => {
    return places
        .sort((placeA, placeB) => {
            return placeA.number - placeB.number;
        })
        .map(place => place.id);
};

const placesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_PLACE:
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case READ_PLACE:
            console.log('ACTION', action);
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case UPDATE_PLACE:
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case DELETE_PLACE:
            newState = Object.assign({}, state);
            newState.place = null;
            return newState;
        case READ_PLACES:
            const allPlaces = {};
            action.places.forEach(place => {
                allPlaces[place.id] = place;
            });
            return {
                ...allPlaces,
                ...state,
                places: sorPlaces(action.places)
            };
        default:
            return state;
    }
};


export default placesReducer;
