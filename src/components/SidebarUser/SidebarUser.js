
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarUser.css";
import { connect } from "react-redux";
import { userSignOut } from "../../actions";

const SidebarUser = (props) => {
    const [storage] = useState(localStorage.getItem('userData') || '');
    const renderUsername = () => {
        if(!storage) {
            return null
        }
        const parsedData = JSON.parse(storage);
        return `Welcome: ${parsedData.name}`
    }

    const path = useLocation().pathname;
    
    return (
        <div className="sidebar-user">
            <h1>USER</h1>
            <p>{renderUsername()}</p>
            
            <Link to="/user/dashboard" className={path === '/user/dashboard' ? 'active' : ''}><span>Dashboard</span></Link>
            <Link to="/user/benchmark" className={path === '/user/benchmark' ? 'active' : ''}><span>Benchmark</span></Link>
            <Link to="/user/charts" className={path === '/user/charts' ? 'active' : ''}><span>Charts</span></Link>
            <Link to="/user/search" className={path === '/user/search' ? 'active' : ''}><span>Search</span></Link>
            <Link to="/user/donate" className={path === '/user/donate' ? 'active' : ''}><span>Donate</span></Link>

            <div onClick={props.userSignOut} className="ui button">Sign out</div>
        </div>
    );
}

export default connect(null, { userSignOut })(React.memo(SidebarUser));