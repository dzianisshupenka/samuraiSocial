import React from 'react';
import style from './paginator.module.css';

export let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.pages}>
        {pages.map(p => (
            <span className={`${style.page} ${props.currentPage === p && style.selected}`}
            onClick={ () => {props.onPageChanged(p)}}>{p}</span>
        ))}
        </div>
    )
}

