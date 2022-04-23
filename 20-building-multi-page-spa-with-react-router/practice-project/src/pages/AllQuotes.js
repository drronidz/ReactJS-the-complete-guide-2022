import React, {useEffect} from "react";

// custom Hooks
import useHttp from "../hooks/use-http";
// API Calls
import { getAllQuotes } from "../lib/api";
// Components
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";



const AllQuotes = () => {
    const { sendRequest : getAllQuotesRequest, status, data : loadedQuotes, error } = useHttp(getAllQuotes, true)

    useEffect(() => {
        getAllQuotesRequest()
    }, [getAllQuotesRequest])

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner/>
            </div>)
    }

    if (error) {
        return (
            <div className="centered focused">
                <h3>{error}</h3>
            </div>
        )
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound/>
    }

    return (
        <QuoteList quotes={loadedQuotes}/>
    )
}

export default AllQuotes