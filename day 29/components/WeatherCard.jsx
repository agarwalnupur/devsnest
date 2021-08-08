import { useSelector } from 'react-redux' ;

const WeatherCard = () => {
    const placeData = useSelector(state => state.placeData);
    return(
        <div className="container">
            <div className="row">
                <div className = "offset-md-4 col-12 col-md-4 weather">
                    <div className = "card">
                        {placeData.location ? 
                        <div>
                            <img src = {placeData.current.condition.icon} alt = "weather img"></img>
                            <div className = "temp">{placeData.current.temp_c}° </div>
                            <div className = "desc">{placeData.current.condition.text}</div>
                            <div className = "city">{placeData.location.name}</div>
                            <div className = "container">
                                <div className= "row whp">
                                    <div className = "col-4">
                                        <div className = "title">Wind Now</div>
                                        <div className = "data">{placeData.current.wind_kph}<span id = "unit">KM</span></div>
                                    </div>
                                    <div className = "col-4">
                                        <div className = "title">Humdity</div>
                                        <div className = "data">{placeData.current.humidity}<span id = "unit">%</span></div>
                                    </div>
                                    <div className = "col-4">
                                        <div className = "title">Precipitation</div>
                                        <div className = "data">{placeData.current.precip_mm}<span id = "unit">MM</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <h2>Place Not Found</h2>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
