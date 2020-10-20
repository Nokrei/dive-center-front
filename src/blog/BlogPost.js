import React from "react";

const BlogPost = (props) => {
    let blogPostStyle = {
        maxWidth: '50em',
        margin: 'auto',
        textAlign: 'justify',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        justifyItems: 'center',
        
    }
    return(
        
            <div style={blogPostStyle}>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.body}</p>
    
        </div>
       
        
    )    
};

export default BlogPost
