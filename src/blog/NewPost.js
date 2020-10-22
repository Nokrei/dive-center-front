import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import AppContext from "../AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const NewPost = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const [globalState, setGlobalState] = useContext(AppContext);
  const [added, setAdded] = useState(false)
  const formData = new FormData();

  // Declare variables for React
  let titleField;
  let contentField;
  let addNewPostButton;

  const addNewPost = () => {
    formData.append("title", titleField.value);
    formData.append("body", contentField.value);
    formData.append('userName', globalState.userName);
    formData.append('userAvatar', globalState.userAvatar);
    // fetch function
    fetch(`http://localhost:3002/posts/newpost`, {
        method: "POST",
        //headers: {"Content-Type": "multipart/form-data"},
        body: formData,
      })
        // Convert the JSON string to an object
        .then((response) => response.json())

        // If Promise was successful
        .then((response) => {
          console.log(response);
  }).then(setAdded(true))}

  return (
    <div className="screen">
      <div
        className="container"
        style={{
          marginTop: "5em",
          maxWidth: "40em",
        }}
      >
        <label>Post Title</label>
        <input
          ref={(comp) => (titleField = comp)}
          className="field form-control"
          name="title"
          type="text"
          autocomplete="off"
        />

        <label>Post Content</label>
        <textarea
          ref={(comp) => (contentField = comp)}
          className="field form-control"
          name="content"
          autocomplete="off"
          type="text"
          rows='20'
        />
        <br/>
        {added && <p>Post added</p>}
        <Button
          variant="contained"
          color="primary"
          ref={(comp) => (addNewPostButton = comp)}
          onClick={addNewPost}
        >
          Add Post
        </Button>
        <br/>
        
      </div>
    </div>
  );
};

export default NewPost;
