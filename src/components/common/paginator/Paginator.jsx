import React, { useState } from 'react';
import style from './paginator.module.css';

export let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=15}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize) ;
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return (
        <div className={style.pages}>
        {portionNumber > 1 && 
        <button className={style.btn} onClick={ () => {setPortionNumber(portionNumber -1)} }>prev</button>}
        {pages
        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map(p => (
            <span className={`${style.page} ${currentPage === p && style.selected}`}
            onClick={ () => {onPageChanged(p)}}>{p}</span>
        ))}
        {portionCount > portionNumber && 
        <button  className={style.btn} onClick={ () => {setPortionNumber(portionNumber + 1)} } >next</button>}
        </div>
    )
}

