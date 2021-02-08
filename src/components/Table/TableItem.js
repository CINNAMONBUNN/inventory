import React from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    return (
        <div className={style.item}>
            <input className={`${style.cell} ${style.check}`} type="checkbox" />
            <div className={`${style.cell} ${style.number}`}>{props.number}</div>
            <NavLink className={`${style.cell} ${style.link}`} to="#">Акустика</NavLink>
            <span className={`${style.cell} ${style.name}`}>{props.title}</span>
            <span className={`${style.cell} ${style.owner}`}>Босташвили Алена Владимировна</span>
            <span className={`${style.cell} ${style.location}`}>1 корпус 309вц каб.</span>
            <span className={`${style.cell} ${style.amount}`}>{!props.count ? '0' : props.count} шт.</span>
            <span className={`${style.cell} ${style.comments}`}>{!props.comment ? 'Исправно' : props.comment}</span>
            <button className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>
    )
}

export default TableItem