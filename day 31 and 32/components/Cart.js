import { CartContext } from "../Global/CartContext";
import { useContext } from "react";
const Cart = () => {

    const {shoppingCart , totalPrice, qty, dispatch} = useContext(CartContext);
    // console.log(data);
    return(
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length >0 ? 
                    shoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-img"><img src={cart.img} alt="not found"/></span>
                            <span className="cart-pdt-name">{cart.name}</span>
                            <span className="cart-pdt-price">${cart.price}.00</span>
                            <span className="inc" onClick={() => dispatch({type: 'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                            <span className="pdt-qty">{cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id , cart})}><i className="fas fa-minus"></i></span>
                            <span className="pdt-total-price">${cart.price*cart.qty}.00</span>
                            <span className="del" onClick={() => dispatch({type: 'DELETE', id: cart.id , cart})}><i className="fas fa-trash"></i></span>
                        </div>
                    ))
                : 'Your cart is currently empty'}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                    <div className="summary">
                        <h3>Cart Summary</h3>
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                        <div className="total-price">                        <div className="just-title">Total Price</div>
                        <div className="items-price">${totalPrice}.00</div>
                    </div>
                </div>
                <div className="stripe-sec">

                </div>
            </div>:''}
        </div>
    )
}
export default Cart;