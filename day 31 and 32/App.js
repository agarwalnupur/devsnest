import './App.css';
import { ProductsProvider } from './Global/ProductsContext';
import NavBar from './components/NavBar.js';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartContextProvider } from './Global/CartContext';


function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <CartContextProvider>
          <NavBar/>
          {/* <Router> */}
            <Switch>
              <Route path="/" exact component={Products}/>
              <Route path="/cart" exact component={Cart}/>
              <Route component={NotFound}/> 
            </Switch>
          {/* </Router> */}
        </CartContextProvider>
        
       </ProductsProvider>
      
    </div>
  );
}

export default App;
