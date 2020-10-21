import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import Button from '@material-ui/core/Button';
import { validEmail, validPassword } from "./utils";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProfileScreen = () => {
  // Function for material UI
 /*  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })); */

  // Array of diving facts
  const divingFacts = [
    "Scuba is an acronym. It stands for ‘Self Contained Underwater Breathing Apparatus’. The first aqualung was invented in 1943 by Jacques Cousteau.",
    "Scuba divers never hold their breath. This is the Golden rule taught to all new scuba divers. Even if the regulator falls out of their mouth during a dive they will still keep breathing by gently blowing bubbles.",
    "Things look bigger underwater. Did you know that through a Dive Mask, Objects look about 33% larger due to the flatness on the mask’s lens, a light refraction error?",
    "We have explored less than 10% of the world’s ocean floor. We know more about the surface of the moon than we do about the bottom of the ocean.",
    "Sharks still have a bad reputation thanks to a 1975 Movie called ‘Jaws’ Only a handful of people are attacked each year by sharks. Sharks are considered to be apex predators and very important to our oceans. if you removed sharks from our oceans then the whole food chain would become unbalanced.",
    "Scuba divers breathe compressed air. The air we breathe contains 79% Nitrogen and 21% Oxygen. Breathing air under pressure is fine for us holidaying scuba divers but to do some really deep-sea diving it will then become a problem. Oxygen becomes toxic and the Nitrogen can cause an intoxicating effect.",
    "Water absorbs light. The color that is absorbed the quickest is red, hence the red filters for the underwater cameras. Red is followed by the rest of the colors of the spectrum. DIve lights allow you to see in true color.",
    "The world deepest Scuba dive was more than 1000ft. Going down is the easy part, It will only take 15 mins to get down to those depths but about 15 hours to come up. Ascending from a world record scuba dive would also require a large support team of safety divers and other highly experienced Technical Divers.",
    "Sound travels four times faster in water than it does in air. When hearing a sound underwater, it is not as easy to know which direction the sound is coming from as the sound waves move much quicker through the denser medium of water.",
    "You only have to be 10 years old to begin your scuba training. Yes, as a 10-year-old child you are allowed to join in the same Open Water class as an adult.",
  ];
  // Function to randomly generate diving fact number
  const factNumber = Math.floor(Math.random() * 10);
  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({
    profileLoaded: false,
    errors: [],
    success: false,
    preloader: false,
  });

  // All the registration data will go here
  const formData = new FormData();

  // Declare (not define) variables for React
  let firstNameField;
  let lastNameField;
  let emailField;
  let passwordField;
  let photoField;
  let updateButton;

  const attachFile = (event) => {
    // create a an array for files
    const files = Array.from(event.target.files);

    // append the files (e.g, image) to the FormData
    files.forEach((file, index) => {
      formData.append(index, file);
    });
  };

  const updateUser = () => {
    let errorMessages = [];

    if (firstNameField.value.length === 0) {
      errorMessages.push("Please enter your first name!");
    }
    if (lastNameField.value.length === 0) {
      errorMessages.push("Please enter your last name!");
    }
    if (!validEmail(emailField.value)) {
      errorMessages.push("Please enter your email!");
    }
    if (passwordField.value.length > 0 && !validPassword(passwordField.value)) {
      errorMessages.push("Please enter a valid password!");
    }

    if (errorMessages.length > 0) {
      setState({
        ...state,
        errors: errorMessages,
      });
    } else {
      // Turn on preloader
      setState({
        ...state,
        errors: [],
        preloader: true,
      });

      // Complete the formData
      formData.append("firstName", firstNameField.value);
      formData.append("lastName", lastNameField.value);
      formData.append("email", emailField.value);

      if (
        passwordField.value.length > 0 &&
        validPassword(passwordField.value)
      ) {
        formData.append("password", passwordField.value);
      }

      console.log("new password", formData, passwordField.value);

      // fetch function
      fetch(`http://localhost:3002/users/update`, {
        method: "POST",
        headers: {
          //"Content-Type": "multipart/form-data"
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        // Convert the JSON string to an object
        .then((response) => response.json())

        // If Promise was successful
        .then((response) => {
          console.log(response);

          // Turn off preloader and reveal success message
          setState({
            ...state,
            errors: [],
            preloader: false,
            success: true,
          });
        })

        // If Promise was not fulfilled
        .catch((e) => {
          console.log({ e: e });
          // Turn off preloader and reveal error message
          setState({
            ...state,
            preloader: false,
            errors: ["Something went wrong. Please try again."],
          });
        });
    }
  };

  useEffect(() => {
    // If the profile data is not loaded
    if (!state.profileLoaded) {
      // fetch the data from backend
      fetch(`http://localhost:3002/users/find`, {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: {},
      })
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((profile) => {
          // Once data is loaded, change profileLoaded to true and
          // change the state to populate the form fields
          setState({
            ...state,
            profileLoaded: true,
            firstName: profile[0].firstName,
            lastName: profile[0].lastName,
            email: profile[0].email,
            photoURL: profile[0].photoURL,
            userID: profile[0]._id
          });
          
        })
        .catch((e) => console.log("e", e));
    }
    
  }, [state.profileLoaded]);

  return (
    <div className="screen">
      {!state.profileLoaded && (
        <div
          className="classes.root container"
          style={{display: 'grid', justifyItems:'center', marginTop: '15%'}}
        >
          {" "}
          <CircularProgress />
          <CircularProgress color="primary" />
        </div>
      )}
      {state.profileLoaded && (
        <div
          className="container"
          style={{
            marginTop: "5em",
            maxWidth: "50em",
          }}
        >
          <h1>Hello {state.firstName[0].toUpperCase()+state.firstName.substr(1)}, welcome to your profile</h1>
          <p style={{
              backgroundColor:"#f5f8fc"
          }}>
            Random diving fact for today:
            <br /> {divingFacts[factNumber]}
          </p>

          <br />
          <h2>Profile Settings</h2>
          <p>Update the fields bellow to make changes to your profile</p>
          {state.errors.length > 0 && (
            <div className="error-message">
              <ol>
                {state.errors.map((error) => (
                  <li>{error}</li>
                ))}
              </ol>
            </div>
          )}

          {state.preloader && <div className="preloader">Loading...</div>}

          {state.success && (
            <div className="alert alert-success">
              Your profile has been updated. Refresh browser window to see
              changes.
            </div>
          )}

          <img
            src={state.photoURL}
            style={{
              width: "10em",
              height: '10em',
              display: "block",
              margin: "0 auto",
              borderRadius: '50%'
              
            }}
          />

          <br />
          <label>First Name</label>
          <input
            ref={(comp) => (firstNameField = comp)}
            type="text"
            className="field form-control"
            defaultValue={state.firstName}
          />

          <label>Last Name</label>
          <input
            ref={(comp) => (lastNameField = comp)}
            type="text"
            className="field form-control"
            defaultValue={state.lastName}
          />

          <label>Email</label>
          <input
            ref={(comp) => (emailField = comp)}
            type="text"
            className="field form-control"
            defaultValue={state.email}
          />

          <label>Password</label>
          <input
            ref={(comp) => (passwordField = comp)}
            type="password"
            className="field form-control"
          />

          <br />
          <br />

          <label>Profile picture</label>
          <input className='picture-input' style={{
              
          }}
            ref={(comp) => (photoField = comp)}
            onChange={attachFile}
            className="field form-control"
            id="photo"
            name="file"
            type="file"
            multiple="multiple"
          />
          <br />
          <br />

          {!state.preloader && (
            <Button variant="contained" color="primary"
              ref={(comp) => (updateButton = comp)}
              onClick={updateUser}
              
            >
              Update
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
//<Button variant="contained" color="primary" >
//Update
//</Button>
