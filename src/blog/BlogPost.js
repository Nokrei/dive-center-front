import React from "react";

const BlogPost = (props) => {
  let blogPostStyle = {
    maxWidth: "50em",
    margin: "auto",
    marginTop:'6em',
    textAlign: "justify",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    justifyItems: "center",
    borderBottom: "1px solid grey",
    padding: "2em",
    marginBottom: "2em",
  };
  let blogImageStyle = {
    width: "4em",
    height: "4em",
    borderRadius: "50%",
  };
  let blogHeaderStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    justifySelf: "left",
  };
  let author = props.name;
  console.log(author);
  return (
    <div style={blogPostStyle}>
      <h1>{props.title}</h1>
      <div style={blogHeaderStyle}>
        <img src={props.avatar} style={blogImageStyle} />{" "}
        <p>by {props.name}</p>
        <p> {props.date}</p>
      </div>
      <br />
      <p>{props.body}</p>
    </div>
  );
};

export default BlogPost;
