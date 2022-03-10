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
        default:
            return state;
    }
};


export default reviewsReducer;
