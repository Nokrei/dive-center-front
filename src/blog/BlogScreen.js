import React from "react";
import axios from "axios";
import PostListItem from "./PostListItem"

import Jumbotron from "../Jumbotron";


class BlogScreen extends React.Component {

  state = {
    posts: []
  };

  componentDidMount(){
    this.getPosts();
  }
  
  async getPosts(){
    const res = await axios.get(`${process.env.REACT_APP_API_URL}posts/`);
    this.setState({ posts: res.data});
  }

 
  renderList(i){
    	return this.state.posts.map(post => {
        return(
          <PostListItem post = {post}  key ={post._id}/>
        );  
    });
  }

  render(){  
  return <div> 
          
    
    <div className="screen">  

  <center>  
  <Jumbotron 
    trip="Blog" 
    titleblog="What you need to know about diving?"


    spaceblog= " ... "
    textblog = {this.renderList()}
    
  >
  </Jumbotron>
  </center>
    

</div>

    </div>;
 }
}




export default BlogScreen;
