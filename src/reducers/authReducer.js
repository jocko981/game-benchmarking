
import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_IN_ADMIN, SIGN_OUT_ADMIN } from "../actions";

const INTIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_USER:
            return { ...state, 
                isSignedIn: true, 
                userId: action.payload.id, 
                userName: action.payload.name 
            };

        case SIGN_OUT_USER:
            return { ...state, 
                isSignedIn: false, 
                userId: null, 
                userName: null 
            };

        default:
            return state;
    }
};