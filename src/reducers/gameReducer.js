import _ from "lodash";
import {
    FETCH_ALL_GAMES,
    FETCH_GAME,
    DELETE_GAME,
    CREATE_GAME,
    EDIT_GAME
} from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_GAMES:
            return { ...state, ..._.mapKeys(action.payload, "ID") };

        case FETCH_GAME:
            return { ...state, [action.payload.ID]: action.payload };
            
        case DELETE_GAME:
            return _.omit(state, action.payload);
            
        case EDIT_GAME:
            return { ...state, [action.payload.ID]: action.payload };


        default:
            return state;
    }
};