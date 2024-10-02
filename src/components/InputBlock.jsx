import {useRef} from "react";
import {useDispatch} from "react-redux";
import {getWeather} from "../store/WeatherSlice.js";

function InputBlock () {
    let inputRef = useRef(null)
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(getWeather(inputRef.current.value))
    }
    dispatch(getWeather('London'))

    return (
        <>
            <div className="flex justify-around rounded-lg shadow-xl p-5 bg-white/50">
                <input
                    className="capitalize outline-none text-xl w-3/4 bg-white/50 rounded-lg px-5 py-2"
                    ref={inputRef}
                    type="text"
                    placeholder="Enter City"/>
                <button
                    className="bg-white/50 rounded-lg px-5 py-2 text-xl"
                    onClick={clickHandler}
                >Get Weather</button>
            </div>
        </>
    )
}

export default InputBlock