
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarAdmin.css";
import { connect } from "react-redux";
import { adminSignOut } from "../../../actions";

const SidebarAdmin = (props) => {
    const [storage] = useState(localStorage.getItem('adminData') || '');

    // console.log('useRouteMatch', useRouteMatch())
    // console.log('useParams', useParams())
    // console.log('useHistory', useHistory())
    
    // console.log('useLocation', useLocation())    // ovo treba

    const path = useLocation().pathname;

    const renderUsername = () => {
        if(!storage) {
            return null
        }
        const parsedData = JSON.parse(storage);
        return `Welcome: ${parsedData.name}`
    }

    return (
        <div className="sidebar-admin">
            <h1>ADMIN</h1>
            <p>{renderUsername()}</p>
            
            <Link to="/admin/games" className={path === '/admin/games' ? 'active' : ''}><span>Games</span></Link>
            <Link to="/admin/users" className={path === '/admin/users' ? 'active' : ''}><span>Users</span></Link>

            <div onClick={props.adminSignOut} className="ui button">Sign out</div>
        </div>
    );
}

export default connect(null, { adminSignOut })(React.memo(SidebarAdmin));
//React.memo is a higher order component.
//If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. 
//This means that React will skip rendering the component, and reuse the last rendered result.
//React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, 
//it will still rerender when state or context change.