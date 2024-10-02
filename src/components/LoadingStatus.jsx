import {useSelector} from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";

function LoadingStatus() {
    const isLoading = useSelector(store => store.weather.isLoading)
    const error = useSelector(store => store.weather.error)

    return (
        <div>
            {isLoading && <AiOutlineLoading className="animate-spin w-full py-10 h-60"/>}
            {error && <div className="flex place-items-center h-60">
                <p className="w-full text-lg text-black bg-red-500 py-5 text-center rounded-lg shadow-lg">{error}</p>
            </div>
            }
        </div>
    )
}

export default LoadingStatus