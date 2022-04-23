// React Core
import React, {Fragment, useEffect} from "react";
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom'

// Components
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// Custom Hooks
import useHttp from "../hooks/use-http";
// API Calls
import {getSingleQuote} from "../lib/api";

const QuoteDetail = () => {
    const match = useRouteMatch()
    const params = useParams()
    const { quoteId } = params
    const {sendRequest: getSingleQuoteRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

    useEffect(() => {
        getSingleQuoteRequest(quoteId)
    }, [getSingleQuoteRequest, quoteId])

    if( status === 'pending') {
        return (
            <div>
                <LoadingSpinner/>
            </div>)
    }

    if (error) {
        return <p className="centered">{error}</p>
    }


    if (!loadedQuote.text) {
        return <h1>No quote with ID {quoteId} found!</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
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