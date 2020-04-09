import React from 'react';
import header from'./Header.module.css';
import logo from '../../img/draniki.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (

    <header className={header.header}>
      <img src={logo} alt='logo' />
      <div className={header.login}>
        {props.auth.isAuth ? 
        <div>{props.auth.login} {props.auth.email} <button className={header.logout} onClick={props.logoutThunk}>logout</button></div>  :
        <NavLink to='/login' >Login</NavLink>}
        
      </div>
    </header>)
}
export default Header;