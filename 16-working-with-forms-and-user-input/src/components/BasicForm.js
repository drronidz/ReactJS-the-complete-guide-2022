import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const isNotEmpty = (value) => value.trim() !== ''
    const isEmail = (value) => value.includes('@')

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        resetInput: resetFirstName
    } = useInput(isNotEmpty)

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        resetInput: resetLastName
    } = useInput(isNotEmpty)

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
    } = useInput(isEmail)

    let formIsValid = false

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true
    }

    const submitHandler = event => {

        event.preventDefault()

        if (!formIsValid) {
            console.log('Form is not valid')
        }
        console.log('Form Submitted ! : ')
        console.log(firstNameValue, lastNameValue, emailValue)

        resetFirstName()
        resetLastName()
        resetEmail()
    }

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'


    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    { firstNameHasError && <p className="error-text">Please enter a correct First Name</p> }
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    { lastNameHasError && <p className="error-text">Please enter a correct Last Name</p> }
                </div>
                <div className={emailClasses}>
                    <label htmlFor="Email">Email</label>
                    <input
                        type="email"
                        id="Email"
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                    { emailHasError && <p className="error-text">Please enter a correct Email Address</p> }
                </div>
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
