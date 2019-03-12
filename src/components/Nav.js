import React from 'react';
import { NavLink } from "react-router-dom";
const Nav = () =>{
    return(
        <div className="nav">
            <NavLink to={'/'} exact className="nav-link">Home</NavLink>
            <NavLink to={'/about'} className="nav-link">About</NavLink>
        </div>
    );
}

export default Nav;