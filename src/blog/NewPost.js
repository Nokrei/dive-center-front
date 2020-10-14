import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import { Redirect } from 'react-router-dom';


const NewPost = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            errors: [],
            preloader: false,
            success: false
        }
    )

    // All the registration data will go here
    const formData = new FormData();

    // Declare (not define) variables for React
    let title;
    let body;
    let tags;
    let titleField;
    let bodyField;
    let submitButton;
    let termsConditionsCheck;

  

    const attachFile = (event) => {
        // create a an array for files
        const files = Array.from(event.target.files);

        // append the files (e.g, image) to the FormData
        files.forEach( (file, index)=> {
            formData.append(index, file);
        });
    }

    const submitPost = () => {

        let errorMessages = [];

        // Step 4
        if(titleField.value.length === 0) {
            errorMessages.push("Please the title!");
        }
        if(bodyField.value.length === 0) {
            errorMessages.push("Please enter the body!");
        }

        // Step 5
        // if(termsConditionsCheck.checked === false) {
        //     errorMessages.push("Please accept terms & conditions!");
        // }

        if(errorMessages.length > 0) {
            setState(
                {
                    ...state,
                    errors: errorMessages
                }
            )
        } else {

            // Turn on preloader
            setState(
                {
                    ...state,
                    errors: [],
                    preloader: true
                }
            )

            // Complete the formData
            formData.append('title', titleField.value);
            formData.append('body', bodyField.value);

            // fetch function
            fetch(`${process.env.REACT_APP_API_URL}posts/addpost`,{
                method: 'POST',
                //headers: {"Content-Type": "multipart/form-data"},
                body: formData
            })
            // Convert the JSON string to an object
            .then(
                (response) => response.json()
            )

            // If Promise was successful
            .then(
                (response) => {
                    console.log(response);
                    
                    // Turn off preloader and reveal success message
                    setState(
                        {
                            ...state,
                            errors: [],
                            preloader: false,
                            success: true
                        }
                    )
                }
            )

            // If Promise was not fulfilled
            .catch(
                (e) => {
                    console.log({e: e})
                    // Turn off preloader and reveal error message
                    setState(
                        {
                            ...state,
                            preloader: false,
                            errors: ['Something went wrong. Please try again.']
                        }
                    )
                }
            )
        }
    }

    if(globalState.submit) {
        return (
            <Redirect to="/" />
        )
    }

    else if(state.success) {
        return (
            <Redirect to="/blog" />
        )
    } 

    else {
        return (
            <div className="screen">
                <div className="container" 
                    style={
                        {
                            marginTop: "5em", 
                            maxWidth: "40em"
                        }
                    }>

                    <h1>Add a new post:</h1>
                    <br/>

                    { state.errors.length > 0 &&
                    <div className="error-message">
                        <ol>
                        { 
                            state.errors.map(
                                (error) => <li>{error}</li>
                            ) 
                        }
                        </ol>
                    </div>
                    }

                    { state.preloader &&
                        <div className="preloader">Loading...</div>
                    }

                    { state.success &&
                        <div className="alert alert-success">Successfully Supmitted</div>
                    }

                    <label>Enter the title *</label>
                    <input ref={(comp)=>titleField = comp} className="field form-control" name="title" 
                    type="text" />

                    <label>Enter the body *</label>
                    <input ref={(comp)=>bodyField=comp} className="field form-control" name="body" type="text" />

                    <br/><br/>

                    <br/><br/>

                    <label>Do you agree to terms &amp; conditions? *</label>
                    <input ref={(comp)=>termsConditionsCheck = comp} className="checkbox" name="termsConditions" 
                    type="checkbox" /> Yes

                    <br/><br/>

                    <button 
                    ref={(comp)=>submitButton = comp}
                    className="btn btn-primary"
                    onClick={submitPost}
                    style={
                        {
                            padding: "10px", 
                            fontSize: "16px"
                        }
                    }>
                        Submit
                    </button>
                </div>


            </div>
        )
    }
}

export default NewPost;