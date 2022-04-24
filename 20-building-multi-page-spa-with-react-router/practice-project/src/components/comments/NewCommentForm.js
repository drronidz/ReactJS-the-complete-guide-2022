import React, {useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom'

import classes from './NewCommentForm.module.css';
// Custom Hook
import useHttp from "../../hooks/use-http";
// API Call
import {addComment} from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();
    const params = useParams()

    const { sendRequest: addCommentRequest, status, error } = useHttp(addComment)
    const { onAddedComment } = props

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment()
        }
    }, [status, error, onAddedComment])

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredText = commentTextRef.current.value

        // optional: Could validate here

        // send comment to server
        addCommentRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });

        // Setting the text area to empty ...
        commentTextRef.current.value = ''

    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' &&
            <div className="centered">
                <LoadingSpinner/>
            </div>}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef}/>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
