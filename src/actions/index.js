
import history from "../history";

export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const SIGN_IN_ADMIN = "SIGN_IN_ADMIN";
export const SIGN_OUT_ADMIN = "SIGN_OUT_ADMIN";
//
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_USER = "FETCH_USER";
export const DELETE_USER = "DELETE_USER";
export const CREATE_USER = "CREATE_USER";
export const EDIT_USER = "EDIT_USER";
//
export const FETCH_ALL_GAMES = "FETCH_GAMES";
export const FETCH_GAME = "FETCH_ONE_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const EDIT_GAME = "EDIT_GAME";

//                       GAMES

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
    // ovde kada nema Url za specific game onda smao izbaci Loader komponentu i vrti se..

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
    const newArr = [...dataAfterCreatingGame, formValues]
    const data = JSON.stringify(newArr);

    localStorage.setItem('allGames', data);

    dispatch({ type: CREATE_GAME, payload: data });

    history.push("/admin/games");
    // za ovo pa ne treba reducer lol
};
export const editGame = (id, formValues) => async (dispatch) => {
    const response = localStorage.getItem('allGames');
    const responseParse = JSON.parse(response);
    const restGames = responseParse.filter(item => item.ID.toString() !== id);
    const newArr = [...restGames, formValues]
    const data = JSON.stringify(newArr);

    localStorage.setItem('allGames', data);

    dispatch({ type: EDIT_GAME, payload: data });
    
    history.push("/admin/games");
    // //
    // console.log((restGames), '[restGames action]');
    // console.log(formValues, '[formValues formValues]');
};

//                     USERS

export const fetchAllUsers = () => async (dispatch) => {
    const response = localStorage.getItem('allUsers');
    const data = JSON.parse(response);

    dispatch({ type: FETCH_ALL_USERS, payload: data });
    // console.log(data, '[fetch_ALL_USERS action]');
};
export const fetchUser = (id) => async (dispatch) => {
    const response = localStorage.getItem('allUsers');
    const data = JSON.parse(response).find(item => item.id.toString() === id);

    if(data === undefined) {
        return null 
    } else // jel treba ovde else ??

    dispatch({ type: FETCH_USER, payload: data });
    // console.log(data, '[fetch_GAME action]')
};
export const deleteUser = (id) => async (dispatch) => {
    const response = localStorage.getItem('allUsers');
    const dataAfterDeletingUser = JSON.parse(response).filter(item => item.id.toString() !== id);
    const data = JSON.stringify(dataAfterDeletingUser);

    localStorage.setItem('allUsers', data);

    dispatch({ type: DELETE_USER, payload: id });
    
    history.push("/admin/users");
};
export const createUser = (formValues) => async (dispatch, getState) => {
    // const { userId } = getState().auth;
    const response = localStorage.getItem('allUsers');
    const dataAfterCreatingGame = JSON.parse(response);
    const newArr = [...dataAfterCreatingGame, formValues]
    const data = JSON.stringify(newArr);

    localStorage.setItem('allUsers', data);

    dispatch({ type: CREATE_USER, payload: data });

    history.push("/admin/users");
    // za ovo pa ne treba reducer lol
};
export const editUser = (id, formValues) => async (dispatch) => {
    const response = localStorage.getItem('allUsers');
    const responseParse = JSON.parse(response);
    const restUsers = responseParse.filter(item => item.id.toString() !== id);
    const newArr = [...restUsers, formValues]
    const data = JSON.stringify(newArr);

    localStorage.setItem('allUsers', data);

    dispatch({ type: EDIT_USER, payload: data });
    
    history.push("/admin/users");
};

//                       LOGIN

export const userSignIn = (userData) => {
    localStorage.removeItem('userData');
    const userLoggedData = { name: userData.name, role: userData.role };
    const data = JSON.stringify(userLoggedData);
    localStorage.setItem('userData', data);

    // console.log('action call signIn USER', JSON.stringify(userLoggedData))

    return {
        type: SIGN_IN_USER,
        payload: userLoggedData
    };
};
export const adminSignIn = (userData) => {
    localStorage.removeItem('adminData');
    const adminLoggedData = { name: userData.name, role: userData.role };
    const data = JSON.stringify(adminLoggedData);
    localStorage.setItem('adminData', data);

    // console.log('action call signIn ADMIN', JSON.stringify(adminLoggedData))
    return {
        type: SIGN_IN_ADMIN,
        payload: adminLoggedData
    };
};

export const userSignOut = () => {
    localStorage.removeItem('userData');

    history.push("/");
    
    return {
        type: SIGN_OUT_USER
    };
};
export const adminSignOut = () => {
    localStorage.removeItem('adminData');
    
    history.push("/");

    return {
        type: SIGN_OUT_ADMIN
    };
    
};
