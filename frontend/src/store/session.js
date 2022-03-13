import { csrfFetch } from './csrf';

//  A C T I O N S
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const DISPLAY_MODAL_LOGIN = 'session/DISPLAY_MODAL_LOGIN';
const DISPLAY_MODAL_SIGNUP = 'session/DISPLAY_MODAL_SIGNUP';

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

//  D I S P L A Y   M O D A L  L O G I N
export const displayModalLogin = () => {
    return (dispatch, getState) => {
        const shouldDisplayLogin = getState().session.shouldDisplayLogin;
        return dispatch({
            type: DISPLAY_MODAL_LOGIN,
            shouldDisplayLogin: !shouldDisplayLogin
        });
    };
};

//  D I S P L A Y   M O D A L  S I G N U P
export const displayModalSignup = () => {
    return (dispatch, getState) => {
        const shouldDisplaySignup = getState().session.shouldDisplaySignup;
        return dispatch({
            type: DISPLAY_MODAL_SIGNUP,
            shouldDisplaySignup: !shouldDisplaySignup
        });
    };
};


//  L O G I N   U S E R
export const login = user => async dispatch => {
    const { username, password } = user;
    try {
        const response = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();
        dispatch(setUser(data.user));
        return response;
    } catch (e) {
        const data = await e.json();
        return {
            error: true,
            data: data.errors,
        };
    }
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
    const { firstName, lastName, username, email, imageProfile, password, confirmPassword } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            imageProfile,
            password,
            confirmPassword
        })
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return Promise.reject(data);
        }
        dispatch(setUser(data.user));

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
            newState.shouldDisplayLogin = false;
            newState.shouldDisplaySignup = false;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case DISPLAY_MODAL_LOGIN:
            newState = Object.assign({}, state);
            newState.shouldDisplayLogin = action.shouldDisplayLogin;
            return newState;
        case DISPLAY_MODAL_SIGNUP:
            newState = Object.assign({}, state);
            newState.shouldDisplaySignup = action.shouldDisplaySignup;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
