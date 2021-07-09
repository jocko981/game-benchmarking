
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarAdmin.css";

const SidebarAdmin = () => {
    const [active, setActive] = useState({ games: 0, users: 0 });

    // console.log('useRouteMatch', useRouteMatch())
    // console.log('useParams', useParams())
    console.log('useLocation', useLocation())
    // console.log('useHistory', useHistory())

    const path = useLocation().pathname

    useEffect(() => {
        //
    }, [path])

    return (
        <div className="sidebar-admin">
            <h1>ADMIN</h1>
            
            <Link to="/admin/games" onClick={() => setActive({ games: 1, users: 0 })} className={path === '/admin/games' ? 'active' : ''}><span>Games</span></Link>
            <Link to="/admin/users" onClick={() => setActive({ games: 0, users: 1 })} className={path === '/admin/users' ? 'active' : ''}><span>Users</span></Link>
        </div>
    );
}

export default SidebarAdmin;