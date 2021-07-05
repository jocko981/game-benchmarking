
const rootReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_LIST":
            return action.payload;

        default:
            return state;
    }
};

export default rootReducer;