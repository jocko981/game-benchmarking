import _ from "lodash";
import {
    FETCH_GAMES,
    FETCH_GAME,
    CREATE_GAME,
    DELETE_GAME,
    EDIT_GAME
} from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_GAMES:
            return { ...state, ..._.mapKeys(action.payload, "ID") };

        default:
            return state;
    }
};