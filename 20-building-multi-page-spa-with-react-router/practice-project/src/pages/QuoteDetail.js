import React, {Fragment} from "react";
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom'
import Comments from "../components/comments/Comments";
import DUMMY_QUOTES from "../components/quotes/DUMMY_QUOTES";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    const match = useRouteMatch()
    const params = useParams()
    const quoteId = params.quoteId
    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

    console.log(match)

    if (!quote) {
        return <h1>No quote with ID {quoteId} found!</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail