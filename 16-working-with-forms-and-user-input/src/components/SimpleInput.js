import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef()
    const [enteredName, setEnteredName] = useState('')

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        // Basic Validation
        if (enteredName.trim() === '') {
            console.log('Name field is empty ...')
            return
        }

        console.log('from useState : '+enteredName)

        const enteredValue = nameInputRef.current.value
        console.log('from useRef : ' + enteredValue)

        setEnteredName('')
        // nameInputRef.current.value = '' ; => NOT IDEAL, DON'T MANIPULATE THE DOM DIRECTLY
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameInputRef}
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    value={enteredName}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
