import React from "react";
import {useParams} from 'react-router-dom'

const QuoteDetail = () => {
    const params = useParams()
    const quoteId = params.quoteId
    return (
        <section>
            <h1>Quote Detail Page</h1>
            <h2>Quote id is : {quoteId}</h2>
        </section>
        )
}

export default QuoteDetail