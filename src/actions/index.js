
// import history from "../history";

//
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
//
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_GAME = "FETCH_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const EDIT_GAME = "EDIT_GAME";

export const fetchGames = () => async (dispatch) => {
    const response = localStorage.getItem('allGames');

    dispatch({ type: FETCH_GAMES, payload: JSON.parse(response) });
    console.log(JSON.parse(response), "[fetchGames action call Response]")
};

export const fetchGame = (id) => async (dispatch) => {
    const response = localStorage.getItem('allGames');

    dispatch({ type: FETCH_GAMES, payload: JSON.parse(response) });
    console.log(JSON.parse(response))
};


































// Login actions
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
