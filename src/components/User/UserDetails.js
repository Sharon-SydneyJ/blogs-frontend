
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constraints/index.js";
import BlogpostForm from "../Blog/BlogpostForm.js";



export default function UserDetails() {
    const [user, setUser] = useState("");
  
    const { id } = useParams();

    //  SHOW USERS
  
    useEffect(() => {
      fetch(BASE_URL + 'users/' + id)
        .then((res) => res.json())
        .then((json) => setUser(json));
    }, [id]);
  
    useEffect(() => {
        console.log(user);
    }, [user]);

    function createBlogPost(blogpostDetails) {
        const newBlogpost = {
          ...blogpostDetails,
          user_id: id,
        };

        // POST BLOGPOST
    
        fetch(BASE_URL + `users/${id}/blogposts`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBlogpost),
        })
          .then((res) => res.json())
          .then((json) => {
            const newUser = { ...user, blogpost: [...user.blogposts, json] };
            setUser(newUser);
          });
      }



    
  
    return (
        <div>
        {user && (
          <>
            <p>First Name: {user.first_name}</p>
            <p>User Name: {user.user_name}</p>
            
            <div className="card-container  ">
             
            <h3>Add New Blog post</h3>
            <BlogpostForm createBlogpost={createBlogPost} />
            
        
            </div>
            
          </>
        )}
      </div>
    );
  
  }