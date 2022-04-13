import {useEffect, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: resetNameInput
    } = useInput(value => value.trim('') !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmailInput
    } = useInput(value => value.includes('@'))


    const [formIsValid, setFormIsValid] = useState(false)


    useEffect(() => {
        if (enteredNameIsValid && enteredEmailIsValid) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [enteredNameIsValid, enteredEmailIsValid])

    const formSubmissionHandler = event => {
        event.preventDefault()

        // Basic Validation
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            console.log('Name or Email field is empty ...')
            return
        }

        console.log('from useState : (Name) : ' + enteredName)
        console.log('from useState : (E-Mail) :' + enteredEmail)

        // nameInputRef.current.value = '' ; => NOT IDEAL, DON'T MANIPULATE THE DOM DIRECTLY
        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control'

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                { emailInputHasError && <p className="error-text">E-Mail must not be empty.</p> }
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
