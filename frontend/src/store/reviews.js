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
