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

  





  const footerStyle = {
    "grid-row-start": "2",
    "grid-row-end": "3",
    'width': '100%'
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
                  style={{ "margin-right": "1em" }}
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
