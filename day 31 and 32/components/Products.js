import { ProductsContext } from "../Global/ProductsContext"
import { useContext } from "react";
import Banner from './Banner';
import { CartContext } from "../Global/CartContext";

const Products = () => {
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);

    // console.log(data);
    return(
        <div className="container">
            <Banner/>
            <div className="products">
                {products.map(product => (
                <div className="product" key= {product.id}>
                    <div className="pdt-img">
                        <img src={product.img} alt="not found"/>
                    </div>
                    <div className="pdt-details">
                        <div className="pdt-name">
                            {product.name}
                        </div>
                        <div className="pdt-price">
                            ${product.price}.00
                        </div>
                    </div>
                    <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART' , id: product.id, product})}>ADD TO CART</div>
                    {product.status === 'hot' ? <div className="hot">HOT</div>:<div className="new">NEW</div>}
                </div>
            ))}
            </div>
        </div>
        
    )
}

export default Products;