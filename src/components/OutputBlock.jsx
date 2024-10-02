import {useSelector} from "react-redux";
import { WiDayRain } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

function Icon ({ IconTypes }) {
    let className = 'w-full my-5 text-[5rem]';

    switch (IconTypes) {
        case 'light-rain' : return <WiDayRain className={className}/>;
        case 'moderate-rain' : return <WiRain className={className}/>;
        case 'heavy-rain' : return <WiThunderstorm className={className}/>;
        case 'light-cloud' : return <WiDaySunny className={className}/>;
        case 'moderate-cloud' : return <WiCloud className={className}/>;
        case 'heavy-cloud' : return <WiCloudy className={className}/>;
        default: break;
    }
    return <></>
}


function OutputBlock () {
    const data = useSelector(store => store.weather.data)

    return (
        <div className="flex justify-start gap-x-5 mt-10">
            {data?.map(item => {
                return (
                    <div
                        key={item.id}
                        className="shadow-xl rounded-lg text-center px-5 py-2 bg-white/50">
                        <Icon IconTypes={item.IconType} />
                        <p className="p-5 pt-0 text-xl">{item.temp}&#186;C</p>
                        <hr className="border-purple-950"/>
                        <p className="p-5 text-base">{item.time}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default OutputBlock