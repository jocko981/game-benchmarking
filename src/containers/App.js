import React, { useState } from "react";
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
// error pages
import ErrorPage404 from "../components/errorPages/ErrorPage404";

const App = () => {
  const [isAdminLogged] = useState(localStorage.getItem('adminData') || '');
  const [isUserLogged] = useState(localStorage.getItem('userData') || '');

  const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
      return isAdminLogged 
      ? <Component {...props} /> 
      : <Redirect to="/login" />
    }} />
  }
  const UserPrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
      return isUserLogged 
      ? <Component {...props} /> 
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
    }} />
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Router history={history}>
        
        <Switch>
          <Redirect exact from="/user" to="/user/dashboard" />
          <Redirect exact from="/" to="/login" />

          <Route exact path="/login" component={LoginPage} />

          <UserPrivateRoute path="/user" component={SidebarUser} /> {/* not 'exact' */}
          
          <AdminPrivateRoute path="/admin" component={SidebarAdmin} /> {/* not 'exact' */}
        </Switch>

        {/* USER page Nav handle */}
        <Switch>

          <UserPrivateRoute exact path="/user/dashboard" component={Dashboard} />
          <UserPrivateRoute exact path="/user/benchmark" component={Benchmark} />
          <UserPrivateRoute exact path="/user/charts" component={Charts} />
          <UserPrivateRoute exact path="/user/search" component={Search} />
          <UserPrivateRoute exact path="/user/donate" component={Donate} />
        </Switch>
        {/* ADMIN page Nav handle */}
        <Switch>
          <Redirect exact from="/admin" to="/admin/games" />

          <AdminPrivateRoute exact path="/admin/games/delete/:id" component={GameDelete} />
          <AdminPrivateRoute exact path="/admin/games/edit/:id" component={GameEditForm} />
          <AdminPrivateRoute exact path="/admin/games/new" component={GameCreateForm} />
          <AdminPrivateRoute exact path="/admin/games/:id" component={GameShow} />
          <AdminPrivateRoute exact path="/admin/games" component={GameList} />

          <AdminPrivateRoute exact path="/admin/users/delete/:id" component={UserDelete} />
          <AdminPrivateRoute exact path="/admin/users/edit/:id" component={UserEditForm} />
          <AdminPrivateRoute exact path="/admin/users/new" component={UserCreateForm} />
          <AdminPrivateRoute exact path="/admin/users/:id" component={UserShow} />
          <AdminPrivateRoute exact path="/admin/users" component={UserList} />
        </Switch>

      </Router>
    </DndProvider>
  );
}

export default App;