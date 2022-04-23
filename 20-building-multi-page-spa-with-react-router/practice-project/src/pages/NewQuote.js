import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom'

// Components
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

const NewQuote = () => {
    const { sendRequest: addNewQuoteRequest, status } = useHttp(addQuote)
    const history = useHistory()
    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = quoteDATA => {
        addNewQuoteRequest(quoteDATA)
    }

    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
}

export default NewQuote