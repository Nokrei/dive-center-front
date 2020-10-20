import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Engagement from "./Engagement";
import IconButton from "./IconButton";
import SocialMediaLinks from "./SocialMediaLinks";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const LayoutRoute = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [state, setState] = useState({
    profileLoaded: false,
    errors: [],
    success: false,
    preloader: false,
    isAdmin: false,
  });
  useEffect(() => {
    
    if (state.id === "5f84531694093369d408402b") {
      setGlobalState({
        ...globalState,
        isAdmin: true,
      });
    }
      // fetch the data from backend
      fetch("http://localhost:3002/users/find", {
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
            id: profile[0]._id,
          });
        }).then((check)=>{
          if (state.id === "5f84531694093369d408402b") {
            setGlobalState({
              ...globalState,
              isAdmin: true,
            });
          }
        }
          
        )
        .catch((e) => console.log("e", e));
    
    
  }, [state.profileLoaded]);
  console.log(globalState.isAdmin);
  console.log(state.id);

  const footerStyle = {
    gridRowStart: "2",
    gridRowEnd: "3",
    width: "100%",
  };

  const logoutUser = () => {
    setGlobalState({
      ...globalState,
      loggedIn: false,
    });
  };

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <NavBar
          brand="Yellow Lions Dive Centre"
          links={[
            { label: "Trips", path: "trips" },
            { label: "Blog", path: "blogscreen" },
          ]}
        >
          {" "}
          {!globalState.loggedIn && (
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          )}
          {globalState.loggedIn && (
            <>
              <Link to="/profile">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1em" }}
                >
                  Profile
                </Button>
              </Link>
              <Button variant="outlined" color="secondary" onClick={logoutUser}>
                Log out
              </Button>
            </>
          )}
        </NavBar>

        <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />

        <br />
        <br />
      </div>

      <div style={footerStyle}>
        <Engagement>
          <SocialMediaLinks>
            <IconButton icon="fa-facebook" />
            <IconButton icon="fa-linkedin" />
            <IconButton icon="fa-instagram" />
            <IconButton icon="fa-youtube" />
          </SocialMediaLinks>
          <p style={{ color: "white", margin: "10px" }}>
            Copyright Yellow Lions Dive Centre 2020
          </p>
        </Engagement>
      </div>
    </React.Fragment>
  );
};

export default LayoutRoute;
