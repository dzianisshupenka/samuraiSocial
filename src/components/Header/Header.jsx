import React from 'react';
import header from'./Header.module.css';
import logo from '../../img/draniki.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <header className={header.header}>
      <img src={logo} alt='logo' />
      <div className={header.login}>
        {props.auth.isAuth ? props.auth.login : <NavLink to='/login' >Login</NavLink>}
        
      </div>
    </header>)
}
export default Header;