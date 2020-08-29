const initialState = {
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                error: null
            }
        case 'LOGOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                error: null
            }
        case 'SIGNUP_FAILED':
            return {
                ...state,
                error: action.err.message
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default authReducer