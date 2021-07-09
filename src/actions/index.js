
import history from "../history";

//
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
//
export const FETCH_ALL_GAMES = "FETCH_GAMES";
export const FETCH_GAME = "FETCH_ONE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const EDIT_GAME = "EDIT_GAME";

export const fetchAllGames = () => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const data = JSON.parse(response);

    dispatch({ type: FETCH_ALL_GAMES, payload: data });
    // console.log(data, '[fetch_ALL_GAMES action]');
};

export const fetchGame = (id) => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const data = JSON.parse(response).find(item => item.ID.toString() === id);

    if(data === undefined) {
        return null 
    } else // jel treba ovde else ??

    // ako je url /games/77 a game.ID==77 ne postoji onda return null

    dispatch({ type: FETCH_GAME, payload: data });
    // console.log(data, '[fetch_GAME action]')
};

export const deleteGame = (id) => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const dataAfterDeletingGame = JSON.parse(response).filter(item => item.ID.toString() !== id);
    const data = JSON.stringify(dataAfterDeletingGame);

    localStorage.setItem('allGames', data);

    dispatch({ type: DELETE_GAME, payload: id });
    
    history.push("/admin/games");
};

export const createGame = (formValues) => async (dispatch, getState) => {
    // const { userId } = getState().auth;
    const response = localStorage.getItem('allGames');
    const dataAfterCreatingGame = JSON.parse(response);
    dataAfterCreatingGame.push(formValues);
    const data = JSON.stringify(dataAfterCreatingGame);

    localStorage.setItem('allGames', data);

    dispatch({ type: CREATE_GAME, payload: dataAfterCreatingGame });

    history.push("/admin/games");
};




// TBC...

export const editGame = (id) => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const data = JSON.parse(response).find(item => item.ID.toString() === id);

    dispatch({ type: EDIT_GAME, payload: data });
    
    history.push("/admin/games");
    // console.log(data, '[edit_GAME action]');
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
