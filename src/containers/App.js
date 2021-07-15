import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
import GameEditForm from "../components/admin/Games/GameEditForm";
import GameCreateForm from "../components/admin/Games/GameCreateForm";
//
import UserList from "../components/admin/Users/UserList";
import UserShow from "../components/admin/Users/UserShow";
import UserDelete from "../components/admin/Users/UserDelete";
import UserCreateForm from "../components/admin/Users/UserCreateForm";
import UserEditForm from "../components/admin/Users/UserEditForm";

const App = () => {
  useEffect(() => {
    // used to setLocalStorage here.. now its at index.js

    // if(localStorage.getItem('allGames') || localStorage.getItem('allUsers')) {
    //   return null
    // }
  }, [])
  

    // <Route exact path="/" render={() => (
    //   loggedIn ? (
    //     <Redirect to="/searchDashboard"/>
    //   ) : (
    //     <Redirect to="/login"/>
    //   )
    // )}/>

  return (
    <DndProvider backend={HTML5Backend}>
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
            {/* <Route exact component={SidebarAdmin} /> ovo je isto kao <SidebarAdmin /> */}
            <SidebarAdmin />

            <Route exact path="/admin/users/delete/:id" component={UserDelete} />
            <Route exact path="/admin/users/edit/:id" component={UserEditForm} />

            <Route exact path="/admin/games/delete/:id" component={GameDelete} />
            <Route exact path="/admin/games/edit/:id" component={GameEditForm} />
            
            {/* <Route exact path="/admin/games/:id" component={GameShow} /> */}
            {/* <Route exact path="/admin/games/new" component={GameCreate} /> */}
            {/* <Route exact path="/admin/games" component={GameList} /> */}
          </Route>
        </Switch>

        <Switch>
          <Redirect exact from="/admin" to="/admin/games" />
          
          <Route exact path="/admin/games/new" component={GameCreateForm} />
          <Route exact path="/admin/games/:id" component={GameShow} />
          <Route exact path="/admin/games" component={GameList} />
          
          <Route exact path="/admin/users/new" component={UserCreateForm} />
          <Route exact path="/admin/users/:id" component={UserShow} />
            <Route exact path="/admin/users" component={UserList} />
        </Switch>
        
      </Router>
    </div>
    </DndProvider>
  );
}

export default App;