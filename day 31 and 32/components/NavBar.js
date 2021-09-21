import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, CartContextProvider } from "../Global/CartContext";
const NavBar = () => {
    const {qty} = useContext(CartContext);
    return(
        <nav>
            <ul className="left">
                <li><Link to="/">E-comm</Link></li>
            </ul>
            <ul  className="right">
            <li><Link to="/cart">
                    
                    <span className="cart"><i className="fas fa-cart-plus"></i>
                    <span className="cartCount">{qty}</span></span></Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;