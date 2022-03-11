import { csrfFetch } from './csrf';

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

//   C R E A T E   R E V I E W
const createReviewAction = review => {
    return {
        type: CREATE_REVIEW,
        payload: review,
    };
};

//   R E A D    R E V I E W S
const getReviewsAction = reviews => {
    return {
        type: GET_REVIEWS,
        payload: reviews,
    };
};

// U P D A T E   R E V I E W
const updateOneReviewAction = review => {
    return {
        type: UPDATE_REVIEW,
        payload: review,
    };
};


//   R E M O V E   R E V I E W
const removeOneReviewAction = review => {
    return {
        type: DELETE_REVIEW,
        payload: review,
    };
};

//   C R E A T E   R E V I E W
export const createReview = review => async dispatch => {
    const { title, message, score, userId, placeId } = review;
    try {

        const response = await csrfFetch(`/api/places/${placeId}/reviews`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                message,
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
            dispatch(createReviewAction(data.review));
            return response;
        }
    } catch (e) {
        console.log('ERROR', e);
    }
    return Promise.reject();
};

//   R E A D   A L L   R E V I E W S
export const getReviews = placeId => async dispatch => {
    const response = await csrfFetch(`/api/places/${placeId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(getReviewsAction(reviews));
    }
};

//  U P D A T E   R E V I E W
export const updateReview = review => async dispatch => {
    const { placeId } = review;

    const response = await csrfFetch(`/api/places/${placeId}/reviews/${review.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
    });

    if (response) {
        const review = await response.json();
        dispatch(updateOneReviewAction(review));
        return review;
    }
};

//   D E L E T E   R E V I E W
export const deleteReview = review => async dispatch => {
    const { placeId } = review;

    console.log('PLACE ID', placeId, "REVIEW ID", review.id);
    const response = await csrfFetch(`/ api / places / ${placeId} / reviews / ${review.id}`, {
        method: 'DELETE'
    });
    dispatch(removeOneReviewAction());
    return response;
};


//   R E D U C E R S
const initialState = { reviewsList: [] };

// const sortReviews = reviews => {
//     return reviews
//         .sort((reviewA, reviewB) => {
//             return reviewA.number - reviewB.number;
//         })
//         .map(review => review.id);
// };

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_REVIEW:
            newState = Object.assign({}, state);
            newState.reviewsList.push(action.payload);
            return newState;
        case GET_REVIEWS:
            newState = Object.assign({}, state);
            newState.reviewsList = action.payload;
            return newState;
        case DELETE_REVIEW:
            newState = Object.assign({}, state);
            newState.reviewsList = newState.reviewsList.filter(review => console.log('REVIEW ', review) || action.payload.id !== review.id);
            return newState;
        default:
            return state;
    }
};


export default reviewsReducer;
