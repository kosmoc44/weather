import style from './Current.module.scss'
import Count from '../../assets/images/russia.svg'
import { useSelector } from "react-redux"
import { getTime } from "../../utils/getTime"
import { weatherImg } from "../../utils/getImg"
import temp from '../../assets/images/temp.svg'
import pressure from '../../assets/images/pressure.svg'
import osadki from '../../assets/images/Group.svg'
import wind from '../../assets/images/wind.svg'

const Current = () => {

    const weather = useSelector(state => state.weather.weather)
    const time = getTime(weather)
    const icon = weather.current.weather[0].icon
    const img = weatherImg[icon] || weatherImg['13d']
    const items = [{
        id: 1,
        img: temp,
        title: 'Температура',
        value: `${Math.round(weather.current.temp)}° - ощущается как ${Math.round(weather.current.feels_like)}°`
    },
    {
        id: 2,
        img: pressure,
        title: 'Давление',
        value: `${weather.current.pressure} мм`
    },
    {
        id: 3,
        img: osadki,
        title: 'Облачность',
        value: `${weather.current.clouds}%`
    },
    {
        id: 4,
        img: wind,
        title: 'Ветер',
        value: `${weather.current.wind_speed} м/с`
    }
    ]

    return (
        <div className={style.current}>
            <div className={style.current__left}>
                <p className={style.current__left_degree}>
                    {Math.round(weather.current.temp)}°
                </p>
                <h1 className={style.current__left_today}>
                    Сегодня
                </h1>
                <p className={style.current__left_time}>
                    Время: {time}
                </p>
                <p className={style.current__left_city}>
                    Город: {weather.timezone.split('/')[1]}
                </p>
                <img
                    className={style.current__left_sun}
                    src={img} alt={icon}
                    style={{ width: 119, height: 119 }}
                />
            </div>
            <div className={style.current__right}>
                <img
                 src={Count} alt="" 
                 className={style.current__right_img} 
                 />
                {items.map((item) => (
                    <div key={item.id} className={style.current__right_item}>
                        <div key={item.id} className={style.current__right_item_img}>
                            <img src={item.img} alt="" />
                        </div>
                        <p className={style.current__right_item_txt}>
                            {item.title}
                        </p>
                        <h2 className={style.current__right_item_num}>
                            {item.value}
                        </h2>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Current