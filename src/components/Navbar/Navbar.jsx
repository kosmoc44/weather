import { BsDropletHalf } from "react-icons/bs";
import { useState } from "react";

import style from './Navbar.module.scss'
import NavLogo from '../../assets/images/Header logo.svg'

import { getLatLon } from "../../store/weather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/theme/themeSlice";

const Navbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const darkMode = useSelector(state => state.theme.darkMode)

    const submitFn = (e) => {
        e.preventDefault()
        if (input.length > 2) {
            dispatch(getLatLon(input))
            setInput('')
        }
    }



    return (
        <nav className={style.nav}>
            <a href="#" className={style.logo}>
                <img src={NavLogo} alt=""
                    style={{ width: 64, height: 64 }}
                />
                <span className={style.span}>
                    React weather
                </span>
            </a>
            <div className={style.search}>
                <BsDropletHalf
                    style={{ width: 35, height: 35, color: darkMode ? 'white' : '#4793FF' }}
                    onClick={() => dispatch(toggleDarkMode())}
                    className={style.search__drop}
                />
                <form onSubmit={submitFn}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className={style.search__input}
                        placeholder="Выбрать город"
                    />
                </form>
            </div>
        </nav>
    )
}

export default Navbar