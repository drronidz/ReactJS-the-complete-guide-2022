import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import DUMMY_QUOTES from "../components/quotes/DUMMY_QUOTES";



const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes