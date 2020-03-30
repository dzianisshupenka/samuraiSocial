import React from 'react';
import header from'./Header.module.css';
import logo from '../../img/draniki.png';

const Header = () => {
    return (<header className={header.header}>
    <img src={logo} alt='logo' />
  </header>)
}
export default Header;