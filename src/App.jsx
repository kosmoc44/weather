import { useDispatch, useSelector } from "react-redux"
import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { getLatLon } from "./store/weather/weatherSlice"
import { useEffect } from "react"
import Daily from "./components/Daily/Daily"
import { initTheme } from "./store/theme/themeSlice"

function App() {

  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather.weather)
  const darkMode = useSelector(state => state.theme.darkMode)

  const wrapperClass = darkMode ? `wrapper dark` : `wrapper`

  useEffect(() => {
    dispatch(initTheme())
    dispatch(getLatLon('Tashkent'))
  }, [dispatch])


  return (
    <>
      <div className={wrapperClass}>
        {weather && (
          <div className="container">
            <Navbar />
            <main className="main">
              <Current />
              <Daily />
            </main>
          </div>
        )}

      </div>
    </>
  )
}

export default App
