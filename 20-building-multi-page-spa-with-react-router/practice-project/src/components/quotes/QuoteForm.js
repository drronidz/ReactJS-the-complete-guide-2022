import React, {Fragment, useRef, useState} from 'react';
import { Prompt } from 'react-router-dom'

// Styles
import classes from './QuoteForm.module.css';
// Components
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler= (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    console.log('From Form Focus Handler')
    setIsEntering(true)
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }


  return (
      <Fragment>
        <Prompt
            when={isEntering}
            message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'}/>
        <Card>
          <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
            {props.isLoading && (
                <div className={classes.loading}>
                  <LoadingSpinner />
                </div>
            )}

            <div className={classes.control}>
              <label htmlFor='author'>Author</label>
              <input type='text' id='author' ref={authorInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='text'>Text</label>
              <textarea id='text' rows='5' ref={textInputRef}/>
            </div>
            <div className={classes.actions}>
              <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
            </div>
          </form>
        </Card>
      </Fragment>

  );
};

export default QuoteForm;
