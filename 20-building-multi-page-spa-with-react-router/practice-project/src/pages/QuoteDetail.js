import React from "react";
import {useParams, Route} from 'react-router-dom'
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams()
    const quoteId = params.quoteId
    return (
        <section>
            <h1>Quote Detail Page</h1>
            <h2>Quote id is : {quoteId}</h2>
            <Route path={`/quotes/${quoteId}/comments`}>
                <Comments/>
            </Route>
        </section>
        )
}

export default QuoteDetail