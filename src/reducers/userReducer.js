
import _ from "lodash";
import {
    FETCH_ALL_USERS,
    FETCH_USER,
    DELETE_USER,
    EDIT_USER,
    CREATE_GAME
} from "../actions";

// using _lodash
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_USERS:
            return { ...state, ..._.mapKeys(action.payload, "id") };

        case FETCH_USER:
            return { ...state, [action.payload.id]: action.payload };
            
        case DELETE_USER:
            return _.omit(state, action.payload);
            // The _.omit() function is used to return a copy of the object that filtered to omit the blacklisted keys. 
            // _.omit(object, *keys)  
            // 'object': This parameter holds the value of an object. 
            // 'keys': It is an optional parameter. It contains the key name that value need to be omitted.
            // Return Value: It returns a copy of the object that filtered to omit the blacklisted keys.            

        default:
            return state;
    }
};