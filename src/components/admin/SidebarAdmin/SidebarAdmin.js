
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarAdmin.css";

const SidebarAdmin = () => {
    const [active, setActive] = useState({ games: 0, users: 0 });

    // console.log('useRouteMatch', useRouteMatch())
    // console.log('useParams', useParams())
    // console.log('useHistory', useHistory())
    
    // console.log('useLocation', useLocation())    // ovo treba

    const path = useLocation().pathname;

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

export default React.memo(SidebarAdmin);
//React.memo is a higher order component.
//If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. 
//This means that React will skip rendering the component, and reuse the last rendered result.
//React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, 
//it will still rerender when state or context change.