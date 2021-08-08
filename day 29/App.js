import "bootstrap/dist/css/bootstrap.min.css" ;
import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="App">
     <Form/>
     <WeatherCard/>
    </div>
  );
}

export default App;
