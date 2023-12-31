import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/meal-form">Add New Meal</NavLink>
        </nav>
    )
}

export default NavBar;