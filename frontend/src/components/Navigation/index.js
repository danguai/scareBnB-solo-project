import { NavLink } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation__bar">
            <ul>
                <NavLink className="temp__solution" to='/'>Home</NavLink>
                <NavLink className="temp__solution" to='/'>Places To Stay</NavLink>
                <NavLink className="temp__solution" to='/'>Haunting experiences</NavLink>
                <NavLink className="temp__solution" to='/'>Become a Ghost</NavLink>
                <NavLink className="temp__solution" to='/'>User</NavLink>
            </ul>
        </div>
    )
};

export default Navigation;
