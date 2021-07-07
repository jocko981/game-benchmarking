
// import history from "../history";

//
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
//
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_ONE_GAME = "FETCH_ONE_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const EDIT_GAME = "EDIT_GAME";

export const fetchGames = () => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const data = JSON.parse(response);

    dispatch({ type: FETCH_GAMES, payload: data });
    // console.log(data, '[fetchGAME SSS action]');
};

export const fetchOneGame = (id) => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const data = JSON.parse(response).filter(item => item.ID == id)[0]

    dispatch({ type: FETCH_ONE_GAME, payload: data });
    // console.log(data, '[fetchGAME action]')
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
