import { csrfFetch } from './csrf';

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const READ_REVIEWS = 'reviews/READ_REVIEWS';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

// C R E A T E   R E V I E W
const createReviewAction = review => {
    return {
        type: CREATE_REVIEW,
        payload: review,
    };
};


//  C R E A T E   R E V I E W
export const createPlace = review => async dispatch => {
    const { title, review, score, userId, placeId } = review;
    try {

        const response = await csrfFetch(`/api/places/${placeId}reviews`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                review,
                score,
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
