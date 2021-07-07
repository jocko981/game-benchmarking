import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";

import LoginPage from "./LoginPage/LoginPage";
// user pages
import SidebarUser from "../components/user/SidebarUser/SidebarUser";
import UserPage from "../components/user/UserPage/UserPage";
import Dashboard from "../components/user/Dashboard/Dashboard";
import Benchmark from "../components/user/Benchmark/Benchmark";
import Charts from "../components/user/Charts/Charts";
import Search from "../components/user/Search/Search";
import Donate from "../components/user/Donate/Donate";
// admin pages
import SidebarAdmin from "../components/admin/SidebarAdmin/SidebarAdmin";
import GameList from "../components/admin/Games/GameList";
import GameShow from "../components/admin/Games/GameShow";
import GameDelete from "../components/admin/Games/GameDelete";
import GameEdit from "../components/admin/Games/GameEdit";
import GameCreate from "../components/admin/Games/GameCreate";
//
import Users from "../components/admin/Users/Users";

const App = () => {
  useEffect(() => {
    localStorage.setItem('allUsers', `[{ "id": 1, "name": "admin", "password": "admin", "role": "admin" }, { "id": 2, "name": "user", "password": "user" }, { "id": 3, "name": "user123", "password": "user123" }]`);

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

  }, [])

    // <Route exact path="/" render={() => (
    //   loggedIn ? (
    //     <Redirect to="/searchDashboard"/>
    //   ) : (
    //     <Redirect to="/login"/>
    //   )
    // )}/>

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          
          <Route exact path="/login" component={LoginPage}></Route>

          <Route path="/user">
            <Redirect to="/user/dashboard" />
            <Route exact component={SidebarUser} />
            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/benchmark" component={Benchmark} />
            <Route exact path="/user/charts" component={Charts} />
            <Route exact path="/user/search" component={Search} />
            <Route exact path="/user/donate" component={Donate} />
            <Route exact path="/user" component={UserPage} />
          </Route>

          <Route path="/admin" component={SidebarAdmin}>
            <Redirect to="/admin/games" />
            <Route exact component={SidebarAdmin} />
            <Route exact path="/admin/users/delete/:id" component='edit this users' />
            <Route exact path="/admin/users/edit/:id" component='edit this users' />
            <Route exact path="/admin/users/:id" component='edit this users' />
            <Route exact path="/admin/users/new" component='edit this users' />
            <Route exact path="/admin/users" component={Users} />
            
            <Route exact path="/admin/games/delete/:id" component={GameDelete} />
            <Route exact path="/admin/games/edit/:id" component={GameEdit} />
            <Route exact path="/admin/games/:id" component={GameShow} />
            <Route exact path="/admin/games/new" component={GameCreate} />
            <Route exact path="/admin/games" component={GameList} />

            {/* <Redirect> da se force navigira ?? */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;