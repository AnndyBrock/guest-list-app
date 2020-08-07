import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png'

function Header() {
    return(
        <nav className="navbar bg-primary">
            <h1>
                <Link to='/'> <img width="150" src={logo} alt="logo"/></Link>

            </h1>

            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header;