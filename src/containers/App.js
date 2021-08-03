import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import LoginPage from "./LoginPage/LoginPage";
// user pages
import Dashboard from "../containers/user/Dashboard/Dashboard";
import Benchmark from "../containers/user/Benchmark/Benchmark";
import Charts from "../containers/user/Charts/Charts";
import Search from "../containers/user/Search/Search";
import Donate from "../containers/user/Donate/Donate";
// admin pages
import GameList from "../containers/admin/Games/GameList";
import GameShow from "../containers/admin/Games/GameShow";
import GameDelete from "../containers/admin/Games/GameDelete";
import GameEditForm from "../containers/admin/Games/GameEditForm";
import GameCreateForm from "../containers/admin/Games/GameCreateForm";
//
import UserList from "../containers/admin/Users/UserList";
import UserShow from "../containers/admin/Users/UserShow";
import UserDelete from "../containers/admin/Users/UserDelete";
import UserCreateForm from "../containers/admin/Users/UserCreateForm";
import UserEditForm from "../containers/admin/Users/UserEditForm";
// error pages
import ErrorPage404 from "../components/ErrorPages/ErrorPage404";

const App = () => {
  const [isAdminLogged] = useState(localStorage.getItem('adminData') || '');
  const [isUserLogged] = useState(localStorage.getItem('userData') || '');
  console.log(isAdminLogged, 'ADMIN isAdminLogged')
  console.log(isUserLogged, 'USER isUserLogged')

  const AdminPrivateRoute = ({ children, component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
      return isAdminLogged 
      ? <Component {...props} /> 
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
    }} />
  }
  const UserPrivateRoute = ({ children, component: Component, ...rest }) => {
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
           <Redirect exact from="/" to="/login" /> {/* Redirect --> */}
          <Route exact path="/login" component={LoginPage} /> 

        {/* USER page Nav handle */}
           <Redirect exact from="/user" to="/user/dashboard" /> {/* Redirect --> */}
          <UserPrivateRoute exact path="/user/dashboard" component={Dashboard} />
          <UserPrivateRoute exact path="/user/benchmark" component={Benchmark} />          
          <UserPrivateRoute exact path="/user/charts" component={Charts} />
          <UserPrivateRoute exact path="/user/search" component={Search} />
          <UserPrivateRoute exact path="/user/donate" component={Donate} />

        {/* ADMIN page Nav handle */}
           <Redirect exact from="/admin" to="/admin/games" /> {/* Redirect --> */}
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

          <Route component={ErrorPage404} />
        </Switch>

        {/* ideja 
          <Route path="/manatee">
            <Comp1 />
            <Comp2 />
          </Route>
        */}

      </Router>
    </DndProvider>
  );
}

export default App;