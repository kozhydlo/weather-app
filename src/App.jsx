import './App.css'
import {useRef} from "react";
import {getWeather} from "./store/WeatherSlice.js";
import {useDispatch} from "react-redux";

function App() {
    let inputRef = useRef(null)
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(getWeather(inputRef.current.value))
    }
  return (
    <>
        <div>
            <input ref={inputRef} type="text" placeholder="Enter City"/>
            <button onClick={clickHandler}>Get Weather</button>
        </div>
    </>
  )
}

export default App
// 4.55