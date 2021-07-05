
import axios from "axios";
import history from "../history";

const FETCH = "FETCH";

export const fetch = () => async dispatch => {
    
    const response = await //axios.get("https://restcountries.eu/rest/v2")

    // console.log(response);

    dispatch ({
        type: FETCH,
        payload: response // ovde sta izbacuje action
    });
}
