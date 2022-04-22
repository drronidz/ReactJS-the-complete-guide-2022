import {Route} from 'react-router-dom'
import React from "react";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
    return (
        <div>
            <MainHeader/>
            <main>
                <Route path="/welcome">
                    <Welcome/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path={"/product-detail/:productId"}>
                    <ProductDetail/>
                </Route>
            </main>
        </div>
    );
}


export default App;

// our-domain.com/welcome => Component A (Welcome Component)
// our-domain.com/products => Component B (Products Component)
// our-domain.com/product-detail/<any value>