import "bootstrap/dist/css/bootstrap.min.css" ;
import './App.css';
import { useState } from 'react';

function App() {

  const [place , setPlace] = useState("");
  const [placeData , setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=b648fb4374964e87a5e54310210608&q=${place}`)
    .then((res) => res.json())
    .then(data => { 
      console.log(data)
      setPlaceData(data);
      })
  }
  return (
    <div className="App">
       <div className = "container">
         <div className = "row">
           <div className = "col-12 form">
             <input type = "text" value = {place} 
             onChange = {(e) =>
              setPlace(e.target.value)}/>
             <button className = "btn btn-primary" onClick = {updatePlaceData} >Submit</button>
           </div>
           <div className = "offset-md-4 col-12 col-md-4 weather">
             <div className = "card">
             {placeData.location ? <div>
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
    
    </div>
  );
}

export default App;
