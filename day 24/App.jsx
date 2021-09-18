import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [loggedIn , setLoggedin] = useState(false);
  // function handleChange(loggedIn) {
  //   setLoggedin(!loggedIn);
  // }
  const home=<Home loggedIn={loggedIn} setLoggedin ={setLoggedin}  /> ;
  
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Switch>

          <Route exact path = "/"  ><Home  loggedIn={loggedIn} setLoggedin={setLoggedin}/></Route>
          <Route path = "/about" component={About} />
          
          {loggedIn ?<Route path = "/profile" component={() => <Profile loggedIn = { loggedIn}/>} /> : home }
          {loggedIn ? <Route path = "/dashboard" component={() => <Dashboard loggedIn = { loggedIn}/>}/> : home}
        </Switch>
          
      </Router>
    </div>
  );
}

export default App;
