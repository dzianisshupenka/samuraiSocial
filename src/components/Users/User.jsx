import React from 'react';
import style from './user.module.css';
import photo from '../../img/31nxvlzm90L._SY450_.jpg'
import { NavLink } from 'react-router-dom';


const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
        let pages = [];
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
    
        return (
          <div className={style.wrap}>
            <div className={style.pages}>
              {pages.map(p => (
                <span className={`${style.page} ${props.currentPage === p && style.selected}`}
                onClick={ () => {props.onPageChanged(p)}}>{p}</span>
              ))}
            </div>
            {props.users.map(u => (
              <div key={u.id} className={style.main}>
                <div className={style.user}>
                  <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : photo}
                      alt="avatar" />
                    </NavLink>
                    
                  </div>
                  <div>
                    {u.followed ? (<button disabled={props.followingProgres.some(id => id === u.id)} onClick={() => {
                      props.unfollow(u.id);
                      }
                    }>unfollow</button>) : (
                      <button disabled={props.followingProgres.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id);
                        }}> follow </button>)}
                  </div>
                </div>
                <div className={style.info}>
                  <div>{u.name}</div>
                  <div>{u.status != null ? u.status : u.id}</div>
                </div>
                <div className={style.location}>
                  <div>'u.location.city'</div>
                  <div>'u.location.country'</div>
                </div>
              </div>
            ))}
          </div>
        );
} 
export default Users