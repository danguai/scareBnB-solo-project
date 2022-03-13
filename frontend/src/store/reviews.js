import { csrfFetch } from './csrf';

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const READ_REVIEWS = 'reviews/READ_REVIEWS';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const DISPLAY_MODAL_REVIEW_FORM = 'reviews/DISPLAY_MODAL_REVIEW_FORM';
const SET_REVIEW_TO_EDIT = 'reviews/SET_REVIEW_TO_EDIT';

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
        type: READ_REVIEWS,
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

//  D I S P L A Y   M O D A L   R E V I E W   F O R M
export const displayModalReviewForm = (reviewToEdit = null) => {
    return (dispatch, getState) => {
        const shouldDisplayReviewForm = getState().reviews.shouldDisplayReviewForm;

        return dispatch({
            type: DISPLAY_MODAL_REVIEW_FORM,
            shouldDisplayReviewForm: !shouldDisplayReviewForm,
            reviewToEdit,
        });
    };
};

// //   R E V I E W   T O   E D I T
export const setReviewToEdit = data => dispatch => {
    dispatch({
        type: SET_REVIEW_TO_EDIT,
        payload: data
    });
    return data;
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

    const response = await csrfFetch(`/api/places/${placeId}/reviews/${review.id}`, {
        method: 'DELETE'
    });

    if (response) {
        const resJson = await response.json();
        dispatch(removeOneReviewAction(resJson));
        return resJson;
    }
};


//   R E D U C E R S
const initialState = {
    reviewsList: [],
    reviewToEdit: null
};

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
            newState.shouldDisplayReviewForm = false;
            return newState;
        case READ_REVIEWS:
            newState = Object.assign({}, state);
            newState.reviewsList = action.payload;
            return newState;
        case UPDATE_REVIEW:
            newState = Object.assign({}, state);
            const index = newState.reviewsList.findIndex(r => r.id === action.payload.id);
            newState.reviewsList[index] = action.payload;
            newState.shouldDisplayReviewForm = false;
            return newState;
        case DELETE_REVIEW:
            newState = Object.assign({}, state);
            newState.reviewsList = newState
                .reviewsList
                .filter(review => action.payload.id !== review.id);
            return newState;
        case SET_REVIEW_TO_EDIT:
            newState = Object.assign({}, state);
            newState.reviewToEdit = {
                ...newState.reviewToEdit,
                ...action.payload,
            };
            return newState;
        case DISPLAY_MODAL_REVIEW_FORM:
            newState = Object.assign({}, state);
            newState.shouldDisplayReviewForm = action.shouldDisplayReviewForm;
            newState.reviewToEdit = action.reviewToEdit;
            return newState;
        default:
            return state;
    }
};


export default reviewsReducer;
