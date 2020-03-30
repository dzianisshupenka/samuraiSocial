import React from 'react';
import style from './user.module.css';
import * as axios from 'axios';
import photo from '../../img/31nxvlzm90L._SY450_.jpg'

let Users = props => {
  let setUsers = () => {
     if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUser(response.data.items);
      });
  }
  
 
    // props.setUser([
    //   {
    //     id: 1,
    //     photo:
    //       "https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg",
    //     followed: true,
    //     fullName: "Dzianis",
    //     status: "im ok",
    //     location: { city: "Zhodzina", country: "Belarus" }
    //   },
    //   {
    //     id: 2,
    //     photo:
    //       "https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg",
    //     followed: true,
    //     fullName: "Poll",
    //     status: "im lazy",
    //     location: { city: "Zhodzina", country: "Belarus" }
    //   },
    //   {
    //     id: 3,
    //     photo:
    //       "https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg",
    //     followed: false,
    //     fullName: "Billy",
    //     status: "Try my music",
    //     location: { city: "Zhodzina", country: "Belarus" }
    //   },
    //   {
    //     id: 4,
    //     photo:
    //       "https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg",
    //     followed: true,
    //     fullName: "Fred",
    //     status: "First time",
    //     location: { city: "Zhodzina", country: "Belarus" }
    //   }
    // ]);
  }
  return (
    
    <div className={style.wrap}>
      <button onClick={setUsers}>setUser</button>
      {props.users.map(u => (
        <div key={u.id} className={style.main}>
          <div className={style.user}>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : photo}
                alt="avatar"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
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
};

export default Users;