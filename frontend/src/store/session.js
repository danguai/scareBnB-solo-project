import { csrfFetch } from './csrf';

//  A C T I O N S
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const DISPLAY_MODAL = 'session/DISPLAY_MODAL';

//  S E T   U S E R
const setUser = user => {
    return {
        type: SET_USER,
        payload: user,
    };
};

//  R E M O V E   U S E R
const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

//  D I S P L A Y   M O D A L
export const displayModal = () => {
    return (dispatch, getState) => {
        const shouldDisplay = getState().displayModal;
        return dispatch({
            type: DISPLAY_MODAL,
            displayModal: !shouldDisplay
        });
    };
};

//  L O G I N   U S E R
export const login = user => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};


//  R E S T O R E   U S E R
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

//  S I G N   U P
export const signUp = user => async dispatch => {
    const { firstName, lastName, username, email, password } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password
        })
    }).catch(e => console.log('BEFORE DATA', e));
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return Promise.reject(data);
        }
        dispatch(setUser(data.user));
        // console.log('AFTER DISPATCH', data);
        return response;
    }
    return Promise.reject();
};

//  L O G   O U T
export const logOut = () => async dispatch => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case DISPLAY_MODAL:
            newState = Object.assign({}, state);
            newState.displayModal = action.displayModal;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
