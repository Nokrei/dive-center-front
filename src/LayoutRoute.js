import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import ToTop from './ToTop';
import Engagement from "./Engagement";
import IconButton from "./IconButton";
import SocialMediaLinks from "./SocialMediaLinks";

import Button from "@material-ui/core/Button";

const LayoutRoute = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  
  

  const footerStyle = {
    gridRowStart: "2",
    gridRowEnd: "3",
    width: "100%",
  };

  const logoutUser = () => {
    setGlobalState({
      ...globalState,
      loggedIn: false,
      isAdmin: false
    });
  };

  return (
    <React.Fragment>
      
      <div style={{ position: "relative" }}>
      <div id='top'/>
        <NavBar
          brand="Yellow Lions Dive Centre"
          links={[
            { label: "Trips", path: "trips" },
            { label: "Blog", path: "blogscreen" },
          ]}
        >
          <ToTop/>
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
