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

    localStorage.setItem('allUsers', `[
      { "id": 1, "role": "admin", "name": "admin", "password": "admin" }, 
      { "id": 2, "role": "user", "name": "user", "password": "user" }, 
      { "id": 3, "role": "user", "name": "user123", "password": "user123" },
      { "id": 4, "role": "admin", "name": "admin123", "password": "admin123" }
    ]`);

    localStorage.setItem('allGames', `[{ "name": "Dota 2", "ID": 1, "num_of_players_favourite": 1000, "price": 50, "type": "MOBA", "num_of_players_global": 2000000, "rating": 9.5, 
      "num_of_players_2015": 750300, "num_of_players_2016": 706040, "num_of_players_2017": 806700, "num_of_players_2018": 810500, "num_of_players_2019": 830200, "num_of_players_2020": 1180700,
      "year_published": 2011, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 0},
    
      { "name": "World of Warcraft", "ID": 2, "num_of_players_favourite": 2000, "price": 50, "type": "MMORPG", "num_of_players_global": 3000000, "rating": 9.4, 
      "num_of_players_2015": 1110900, "num_of_players_2016": 1136000, "num_of_players_2017": 1610000, "num_of_players_2018": 1660000, "num_of_players_2019": 1705000, "num_of_players_2020": 1976000,
      "year_published": 2001, "platform": "steam", "violence": 1, "won_award": 1, "single_player": 0},
    
      { "name": "Counter Strike GO", "ID": 3, "num_of_players_favourite": 1500, "price": 50, "type": "FPS", "num_of_players_global": 1500000, "rating": 8.8, 
      "num_of_players_2015": 650000, "num_of_players_2016": 920000, "num_of_players_2017": 725200, "num_of_players_2018": 899000, "num_of_players_2019": 950000, "num_of_players_2020": 936000,
      "year_published": 2004, "platform": "steam", "violence": 1, "won_award": 0, "single_player": 1},
    
      { "name": "Minecraft", "ID": 4, "num_of_players_favourite": 1200, "price": 50, "type": "MMORPG", "num_of_players_global": 1900000, "rating": 8.9, 
      "num_of_players_2015": 540000, "num_of_players_2016": 980000, "num_of_players_2017": 599000, "num_of_players_2018": 676000, "num_of_players_2019": 877000, "num_of_players_2020": 1190000,
      "year_published": 2013, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 1},
    
      { "name": "League of Legends", "ID": 7, "num_of_players_favourite": 11000, "price": 50, "type": "MOBA", "num_of_players_global": 2400000, "rating": 7.7, 
      "num_of_players_2015": 1150000, "num_of_players_2016": 1450000, "num_of_players_2017": 2510000, "num_of_players_2018": 2560600, "num_of_players_2019": 2650000, "num_of_players_2020": 2677000,
      "year_published": 2012, "platform": "steam", "violence": 0, "won_award": 1, "single_player": 0}]`
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
