import React from "react"
import axios from "axios"

class Post extends React.Component{
state = {
    post: {}
}
componentDidMount(){
    this.getPost();
}

async getPost(){
    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}posts/${this.props.match.params.id}`
        );

        this.setState({post: res.data});
    }
    
    renderHTML(){
            return { __html: this.state.post.body };
    }
    renderTitle(){
        return { __html: this.state.post.title };
}

    renderPost(){
        return  <div dangerouslySetInnerHTML = {this.renderHTML()}></div>;
    }

    render(){
        
        return(<div><h1>{this.state.post.title}</h1>{this.renderPost()}</div>);
        }}

export default Post;