
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constraints/index.js";
import BlogpostForm from "../Blog/BlogpostForm.js"



export default function UserDetails() {
    const [user, setUser] = useState("");
  
  
    const { id } = useParams();

    //  SHOW USERS
  
    useEffect(() => {
      fetch(BASE_URL + `users/${id}`)
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
            alert('Your Blogpost was successfully submitted to our database! Please click Blogs link below to view your new posted Blog!')
          });
      }



    
  
      return (
        <div>
        {user && (
          <>
            <p>Hi {user.first_name}!</p>
            
            <p>We know posting your first blog can be intimidating as all get out!</p>
               <p> And even if you have already posted your first blog, writers block is always lurking.</p>
               <h4>Questions?</h4>
              <p>What do I write about? What should my title be? Who wants to read what I write anyway?</p>
              <h4>Some helpful Answers:</h4>
              <ul>
                <li>Your Blogpost does not have to be a long dissertation!</li>
                <li>It can be short and sweet with a photo added for context.</li>
                <li>Write about something you love or you are passionate about. And include a photo for context.</li>
                <li>Write about something you don't love but you are passionate about. The list of topics are endless.</li>
                <li>Check out some of the links below on getting started, and then face your fears and write something!</li>
              </ul>
              <p>We are looking forward to reading what you have come up with.</p>

              <h3>Getting Started Links</h3>
                <ul>
            <li><a href="https://justagirlandherblog.com/what-should-i-blog-about/" style={{color: 'white'}}>I don't know what to Blog about~By Abby Lawson</a></li>
            <li><a href="https://www.startamomblog.com/what-to-blog-about-first-blog-posts/" style={{color: 'white'}}>What to Blog About When You Don't Know What to Blog About</a></li>
            </ul>

            
            <div className="user-container  ">
            <h4>User Name: {user.user_name}</h4>
            <h3>Add New Blog post</h3>
            <BlogpostForm createBlogpost={createBlogPost} />
            
        
            </div>
            
          </>
        )}
      </div>
    );
  
  }