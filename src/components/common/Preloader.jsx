import React from 'react';
import preloader from '../../img/Spinner-1.4s-137px.svg';
import style from './../Profile/Profile.module.css'

let Preloader = () => {

    return <div className={style.loader}>
        <img alt='loading' src={preloader}/>
    </div>
}

export default Preloader;