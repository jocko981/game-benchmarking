
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarAdmin.css";

const SidebarAdmin = () => {
    const [active, setActive] = useState({ games: 0, users: 0 });

    return (
        <div className="sidebar-admin">
            <Link to="/admin" onClick={() => setActive({ games: 0, users: 0 })}><h1>ADMIN</h1></Link>
            
            <Link to="/admin/games" onClick={() => setActive({ games: 1, users: 0 })} className={active.games && 'active'}><span>Games</span></Link>
            <Link to="/admin/users" onClick={() => setActive({ games: 0, users: 1 })} className={active.users && 'active'}><span>Users</span></Link>
        </div>
    );
}

export default SidebarAdmin;