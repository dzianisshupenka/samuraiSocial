import React from 'react';
import side from'./SideBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Nav = () => {
    return(      
    <nav className={side.bar}>
      <div>
        <NavLink to='/profile' activeClassName={side.active}>Profile</NavLink>          
      </div>
      <div>
        <NavLink to='/users' activeClassName={side.active}>Users</NavLink>          
      </div>
      <div>
        <NavLink to='/messages' activeClassName={side.active}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' activeClassName={side.active}>News</NavLink>
      </div>
      <div>
        <NavLink to='music' activeClassName={side.active}>Music</NavLink>
      </div>
      <div>
        <NavLink to='settings' activeClassName={side.active}>Settings</NavLink>
      </div>
      <Friends />
      {/* <div className={side.friend}>
        <NavLink to='friends' activeClassName={side.active} className={side.friends}>Friends</NavLink>
      </div> */}
    </nav>)
}
export default Nav;