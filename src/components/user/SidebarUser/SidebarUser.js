
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarUser.css";
import { connect } from "react-redux";
import { userSignOut } from "../../../actions";

const SidebarUser = (props) => {
    const [active, setActive] = useState([1, 0, 0, 0, 0]);
    const [storage] = useState(localStorage.getItem('userData') || '');
    
    const renderUsername = () => {
        if(!storage) {
            return null
        }
        const parsedData = JSON.parse(storage);
        return `Welcome: ${parsedData.name}`
    }
    
    return (
        <div className="sidebar-user">
            <h1>USER</h1>
            <p>{renderUsername()}</p>
            
            <Link to="/user/dashboard" onClick={() => setActive([1,0,0,0,0])} className={active[0] && 'active'}><span>Dashboard</span></Link>
            <Link to="/user/benchmark" onClick={() => setActive([0,1,0,0,0])} className={active[1] && 'active'}><span>Benchmark</span></Link>
            <Link to="/user/charts" onClick={() => setActive([0,0,1,0,0])} className={active[2] && 'active'}><span>Charts</span></Link>
            <Link to="/user/search" onClick={() => setActive([0,0,0,1,0])} className={active[3] && 'active'}><span>Search</span></Link>
            <Link to="/user/donate" onClick={() => setActive([0,0,0,0,1])} className={active[4] && 'active'}><span>Donate</span></Link>

            <div onClick={props.userSignOut} className="ui button">Sign out</div>
        </div>
    );
}

export default connect(null, { userSignOut })(React.memo(SidebarUser));