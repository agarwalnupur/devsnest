import { createContext,useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [products] = useState([
        { id: 1, name:'DSLR', price: 120, img:"https://wallpaperaccess.com/full/3148602.jpg",status: "new"} , 
        { id: 11, name:'Self-Tying Shoes', price: 140, img:"https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102", status: "hot"},
        { id: 2, name:'Watch', price: 190, img:"https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , status: "hot"},
        { id: 3, name:'Bag', price: 10, img:"https://p.favim.com/orig/2018/08/21/louis-vuitton-bags-girls-Favim.com-6201488.png" , status: "new"},
        { id: 4, name:'Sunglasses', price: 20, img:"https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=900" , status: "new"},
        { id: 5, name:'Headphones', price: 620, img:"https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" , status: "new"},
        { id: 6, name:'iPhone 7', price: 820, img:"https://www.popsci.com/uploads/2019/12/16/iPhone-Tricks.jpeg?width=1440" , status: "hot"},
        { id: 7, name:'Perfume', price: 220, img:"https://wallpaperaccess.com/full/2299146.jpg" , status: "new"},
        { id: 8, name:'Ring', price: 320, img:"https://cdn.shopify.com/s/files/1/0288/5959/6852/products/ring-rirgwd3403-65-catch-petite-tragefoto_6c4e8a5d-218b-4019-ac14-dc91135f8cae.jpg?v=1610730094" ,  status: "hot"},
        { id: 9, name:'Coffee Mug', price: 400, img:"https://www.wallpaperflare.com/static/911/967/735/coffee-mugs-t-brown-drink-wallpaper.jpg", status:'new'},
        { id: 10, name:'Water Bottle', price: 450, img:"https://cdn.luxe.digital/media/2020/06/24174639/best-water-bottles-premium-LARQ-luxe-digital%402x.jpg", status:'hot'},


    ]);
    
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>

    )
}