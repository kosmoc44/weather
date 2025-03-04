import React from 'react'
import style from './Daily.module.scss'
import { useSelector } from "react-redux"
import Day from "./Day"


const Daily = () => {

    const daily = useSelector(state => state.weather.weather.daily)

    return (
        <div className={style.daily}>
            {daily.map((day, i) => (
                <Day
                    key={day.dt}
                    day={day}
                    index={i}
                />
            ))}
        </div>
    )
}

export default Daily