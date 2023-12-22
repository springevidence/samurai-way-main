import React, {useState} from 'react';
import style from "./Paginator.module.css";
import {v1} from "uuid";

type PaginatorPropsType = {
    onPageChanged: (page: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}
const Paginator = (props: PaginatorPropsType) => {
    const portionCount = Math.ceil(props.totalItemsCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(page => {
                return <span key={v1()} onClick={() => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page ? style.selectedPage : style.page}>{page} </span>
            })}

        {portionCount > portionNumber  && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>

};

export default Paginator;