import React, {Fragment} from "react";
import {useParams, Route} from 'react-router-dom'
import Comments from "../components/comments/Comments";
import DUMMY_QUOTES from "../components/quotes/DUMMY_QUOTES";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    const params = useParams()
    const quoteId = params.quoteId
    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

    if (!quote) {
        return <h1>No quote with ID {quoteId} found!</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote
                text={quote.text}
                author={quote.author}/>
            <Route
                path={`/quotes/${quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
        )
}

export default QuoteDetail