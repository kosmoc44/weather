import React from 'react'
import style from './Daily.module.scss'
import { weatherImg } from "../../utils/getImg"
import { getDate } from "../../utils/getDate"

const Day = ({ day, index }) => {


    const icon = day.weather[0].icon
    const img = weatherImg[icon] || weatherImg['13d']
    const description = day.weather[0].description

    const getWeekDay = getDate(day.dt, 'weekday')
    const getMonthDay = getDate(day.dt, 'day')
    const getMonth = getDate(day.dt, 'month')
    const getLabel = index === 0 ? 'Сегодня' : index === 1 ? 'Завтра' : getWeekDay

    return (
        <div className={style.daily__item}>
            <h1 className={style.daily__item_day}>{getLabel}</h1>
            <p className={style.daily__item_time}>{getMonthDay} {getMonth}</p>
            <img style={{ width: 43, height: 43 }} src={img} alt="cloud" className={style.daily__item_img} />
            <h2 className={style.daily__item_temp}>{Math.round(day.temp.max)}°</h2>
            <p className={style.daily__item_subTemp}>{Math.round(day.temp.min)}°</p>
            <p className={style.daily__item_subTemp}>{description}</p>
        </div>
    )
}

export default Day