import {Route} from 'react-router-dom'
import React from "react";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

const App = () => {
    return (
        <div>
            <Route path="/welcome">
                <Welcome/>
            </Route>
            <Route path="/products">
                <Products/>
            </Route>
        </div>
    );
}


export default App;

// our-domain.com/welcome => Component A (Welcome Component)
// our-domain.com/products => Component B (Products Component)