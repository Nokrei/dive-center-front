import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";
const BlogScreen = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState({
    posts: [],
   
  });

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
      {globalState.isAdmin && (
        <Link to="./newpost">
          <button className="btn btn-primary">New Post</button>
        </Link>
      )}

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
