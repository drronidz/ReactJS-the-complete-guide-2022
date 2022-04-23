import React from "react";
import { useHistory } from 'react-router-dom'

// Components
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const history = useHistory()


    const addQuoteHandler = quoteDATA => {
        console.log(quoteDATA)
        console.log(history)
        history.push('/quotes')
    }

    return <QuoteForm onAddQuote={addQuoteHandler}/>
}

export default NewQuote