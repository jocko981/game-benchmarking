import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/style.css';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);   this stays here
// store={createStoreWithMiddleware(reducers)}                              put this inside <Provider>, but for now we use this under
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))); // use this with ReduxDevTools chrome extention

    localStorage.setItem('allUsers', `[{ "id": 1, "name": "admin", "password": "admin", "role": "admin" }, 
      { "id": 2, "name": "user", "password": "user" }, 
      { "id": 3, "name": "user123", "password": "user123" }]`);

    localStorage.setItem('allGames', `[{ "name": "Dota 2", "ID": 1, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 1000000, "rating": 9.5, 
      "num_of_players_2015": 900000, "num_of_players_2016": 900000, "num_of_players_2017": 900000, "num_of_players_2018": 900000, "num_of_players_2019": 900000, "num_of_players_2020": 900000,
      "year_published": 2011, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 0},
    
      { "name": "World of Warcraft", "ID": 2, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 1000000, "rating": 9.4, 
      "num_of_players_2015": 900000, "num_of_players_2016": 900000, "num_of_players_2017": 900000, "num_of_players_2018": 900000, "num_of_players_2019": 900000, "num_of_players_2020": 900000,
      "year_published": 2011, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 0},
    
      { "name": "Counter Strike GO", "ID": 3, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 1000000, "rating": 8.8, 
      "num_of_players_2015": 900000, "num_of_players_2016": 900000, "num_of_players_2017": 900000, "num_of_players_2018": 900000, "num_of_players_2019": 900000, "num_of_players_2020": 900000,
      "year_published": 2011, "platform": "steam", "violence": 1, "won_award": 1, "single_player": 0},
    
      { "name": "Minecraft", "ID": 4, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 1000000, "rating": 8.6, 
      "num_of_players_2015": 900000, "num_of_players_2016": 900000, "num_of_players_2017": 900000, "num_of_players_2018": 900000, "num_of_players_2019": 900000, "num_of_players_2020": 900000,
      "year_published": 2011, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 1},
    
      { "name": "League of Legends", "ID": 7, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 1000000, "rating": 7.7, 
      "num_of_players_2015": 900000, "num_of_players_2016": 900000, "num_of_players_2017": 900000, "num_of_players_2018": 900000, "num_of_players_2019": 900000, "num_of_players_2020": 900000,
      "year_published": 2011, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 0}]`
    );

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  /* </React.StrictMode> */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
