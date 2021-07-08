import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";

import LoginPage from "./LoginPage/LoginPage";
// user pages
import SidebarUser from "../components/user/SidebarUser/SidebarUser";
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
    // used to setLocalStorage here.. now its at index.js

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
          
          <Route exact path="/login" component={LoginPage} />

          <Route path="/user">
            <Redirect to="/user/dashboard" />
            <Route exact component={SidebarUser} />

            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/benchmark" component={Benchmark} />
            <Route exact path="/user/charts" component={Charts} />
            <Route exact path="/user/search" component={Search} />
            <Route exact path="/user/donate" component={Donate} />
          </Route>

          <Route path="/admin">
            {/* <Redirect to="/admin/games" /> */}
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
            {/* <Route exact path="/admin/games" component={GameList} /> */}
          </Route>
        </Switch>

        <Switch>
          <Redirect exact from="/admin" to="/admin/games" />
          <Route path="/admin/games" component={GameList} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;