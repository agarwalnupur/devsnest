import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
  } from "react-router-dom";



const Navbar = () => {
    return (
        <nav> 
    
            <ul className= "navLinks">
                    <span className= "navLink"><Link to= '/'>Home</Link></span>
                    <span className= "navLink"><Link to= '/about'>About</Link> </span>
                    <span className= "navLink"><Link to= '/profile'>Profile</Link> </span>
                    <span className= "navLink"><Link to= '/dashboard'> Dashboard</Link></span>
               
            </ul>
            
            
           
        </nav>
    )
}

export default Navbar;