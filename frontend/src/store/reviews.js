import { csrfFetch } from './csrf';

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const READ_REVIEW = 'reviews/READ_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

// C R E A T E   R E V I E W
const createReviewAction = review => {
    return {
        type: CREATE_REVIEW,
        payload: review,
    };
};

// R E A D   R E V I E W
const readReviewAction = review => {
    return {
        type: READ_REVIEW,
        payload: review,
    };
};

// U P D A T E   R E V I E W
const updateOneReviewAction = review => {
    return {
        type: UPDATE_REVIEW,
        payload: review,
    };
};

//  R E M O V E   R E V I E W
const removeOneReviewAction = () => {
    return {
        type: DELETE_REVIEW,
    };
};


//  C R E A T E   R E V I E W
export const createPlace = review => async dispatch => {
    const { review, userId, placeId } = place;
    try {

        const response = await csrfFetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
                title,
                review,
                userId,
                placeId
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.errors) {
                return Promise.reject(data);
            }
            dispatch(createReviewAction(data.place));
            return response;
        }
    } catch (e) {
        console.log('ERROR', e);
    }
    return Promise.reject();
};

//   R E A D   O N E   R E V I E W
// export const getReview = id => async dispatch => {
//     const response = await fetch(`/api/places/${id}/reviews/`);

//     if (response.ok) {
//         const review = await response.json();
//         dispatch(readReviewAction(review));
//     }
// };

//  U P D A T E   R E V I E W
export const updatePlace = data => async dispatch => {
    const response = await csrfFetch(`/api/places/${data.id}`, {
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

export const setPlaceToEditValue = data => dispatch => {
    dispatch(setPlaceToEditAction(data));
    return data;
};

//  D E L E T E   R E V I E W
export const deletePlace = id => async dispatch => {
    const response = await csrfFetch(`/api/places/${id}`, {
        method: 'DELETE'
    });
    dispatch(removeOnePlaceAction());
    return response;
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
            newState.shouldDisplayPlaceForm = false;
            return newState;
        case READ_PLACE:
            console.log('ACTION', action);
            newState = Object.assign({}, state);
            newState.place = action.payload;
            return newState;
        case UPDATE_PLACE:
            newState = Object.assign({}, state);
            newState.place = action.payload;
            newState.shouldDisplayPlaceForm = false;
            return newState;
        case SET_PLACE_TO_EDIT:
            newState = Object.assign({}, state);
            newState.placeToEdit = {
                ...newState.placeToEdit,
                ...action.payload,
            };
            return newState;
        case DELETE_PLACE:
            newState = Object.assign({}, state);
            newState.place = null;
            return newState;
        case DISPLAY_MODAL_PLACE_FORM:
            newState = Object.assign({}, state);
            newState.shouldDisplayPlaceForm = action.shouldDisplayPlaceForm;
            newState.placeToEdit = action.placeToEdit;
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
