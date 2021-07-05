import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
import AdminPage from "../components/admin/AdminPage/AdminPage";
import Games from "../components/admin/Games/Games";
import Users from "../components/admin/Users/Users";

const App = () => {
  useEffect(() => {
    localStorage.setItem('allUsers', `{id: 1, name: admin, password: admin}, {id: 2,name: user, password: user}`);
    localStorage.setItem('allGames', 
     `{num_of_players_favourite: 1000, ID: 1, name: dota, price: 50, type: MOBA, num_of_players_global: 1000000, rating: 9.5, 
      num_of_players_2015: 900000, num_of_players_2016: 900000, num_of_players_2017: 900000, num_of_players_2018: 900000, num_of_players_2019: 900000, num_of_players_2020: 900000},
      year_published: 2011, platform: steam, violence: 0, won_award: 1, single_player: 0},

      {id: 2,name: user, password: user},
      {id: 2,name: user, password: user}`,
    );
    
    const allUsers = localStorage.getItem('allUsers');
    console.log(allUsers, '----> ALL USERS local storage')

    const allGames = [localStorage.getItem('allGames')];
    console.log(allGames, '----> ALL GAMES local storage')
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />

          <Route path="/user">
            <Route exact component={SidebarUser} />
            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/benchmark" component={Benchmark} />
            <Route exact path="/user/charts" component={Charts} />
            <Route exact path="/user/search" component={Search} />
            <Route exact path="/user/donate" component={Donate} />
            <Route exact path="/user" component={UserPage} />
          </Route>

          <Route path="/admin" component={SidebarAdmin}>
            <Route exact component={SidebarAdmin} />
            <Route exact path="/admin/users/delete/:id" component='edit this users' />
            <Route exact path="/admin/users/edit/:id" component='edit this users' />
            <Route exact path="/admin/users/:id" component='edit this users' />
            <Route exact path="/admin/users/new" component='edit this users' />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/admin" component={AdminPage} />
            
            <Route exact path="/admin/games/delete/:id" component='edit this games' />
            <Route exact path="/admin/games/edit/:id" component='edit this games' />
            <Route exact path="/admin/games/:id" component='edit this games' />
            <Route exact path="/admin/games/new" component='edit this games' />
            <Route exact path="/admin/games" component={Games} />

            {/* <Redirect> da se force navigira ?? */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;