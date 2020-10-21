import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";
const BlogScreen = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState({
    posts: [],
    userIn: false,
    userID: "",
  });
  const [adminCheck, setAdminCheck] = useState(false);

  useEffect(() => {
    // If the profile data is not loaded
    if (!state.userIn) {
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
            userIn: true,
            userID: profile[0]._id,
          });
          if (state.userID === "5f84531694093369d408402b") {
            setAdminCheck(true);
          }
        })
        .catch((e) => console.log("e", e));
    }
  }, [state.userIn]);
  console.log(state);
  console.log(adminCheck);

  useEffect(() => {
    fetch("http://localhost:3002/posts", {
      method: "GET",
    })
      .then((response) => {
        console.log(("response", response));
        return response.json();
      })
      .then((post) => {
        setState({
          posts: post.reverse(),
        });
      });
  }, []);

  return (
    <div>
      {globalState.loggedIn && state.userID === "5f84531694093369d408402b" ? (
        <Link to="./newpost">
          <button className="btn btn-primary">New Post</button>
        </Link>
      ) : null}

      {state.posts.map((post) => {
        return (
          <BlogPost
            title={post.title}
            body={post.body}
            date={post.createdAt.slice(0, 10)}
          />
        );
      })}
    </div>
  );
};

export default BlogScreen;
