import React from "react";
import {Route, Switch} from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <h1>This is the Welcome page</h1>
            <Route path={"/welcome/new-user"}>
                <h1>Welcome, new User!</h1>
            </Route>
        </section>
    )
}

export default Welcome