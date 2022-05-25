import { csrfFetch } from './csrf';

const GET_USER_INFO = 'profile/GET_USER_INFO';

const getOneUserAction = user => {
    return {
        type: GET_USER_INFO,
        payload: user,
    };
};

export const getUserInfo = id => async dispatch => {
    const response = await csrfFetch(`/api/users/${id}`);

    console.log('ID', id);
    if (response.ok) {
        const user = await response.json();
        dispatch(getOneUserAction(user));
    }
};

const initialState = { user: null };

const profileReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USER_INFO:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        default:
            return state;
    }
};

export default profileReducer;
