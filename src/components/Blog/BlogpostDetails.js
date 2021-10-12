import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constraints/index.js";
import CommentForm from "../Comment/CommentForm.js";



export default function BlogpostDetails() {
    const [blogpost, setBlogpost] = useState({title: "", content: "", img_url: "", user: "", user_name: "", comment: "", remark: ""});
  
     
    const { id } = useParams();

  // SHOW BLOGPOST
    useEffect(() => {
      fetch(BASE_URL + `blogposts/${id}`)
        .then((res) => res.json())
        .then((json) => setBlogpost(json));
    }, [id]);
  
    useEffect(() => {
        console.log(blogpost);
    }, [blogpost]);

    function createComment(commentDetails) {
        const newComment = {
          ...commentDetails,
          user_id: id,
        };

    // POST COMMENT
        fetch(BASE_URL + `users/${id}/blogposts/${id}/comments`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newComment),
        })
          .then((res) => res.json())
          .then((json) => {
            const newBlogpost = { ...blogpost, comment: [...blogpost.comments, json] };
            setBlogpost(newBlogpost);
          });
      }

    
      
  
    return (
    <div>
        {blogpost && (
        <>
        <p>Blogger: {blogpost.user.user_name}</p>
        <p> {blogpost.title} </p>
        <p>{blogpost.content} </p>
        <p> <img  className="ui medium rounded image" src={blogpost.img_url} alt="" /> </p>
        
        <div>
        <h3>Add Your Comment about this post</h3>
        <CommentForm createComment={createComment} />
        </div>

        
        
        </>
    )}
    </div>
    
    );

}