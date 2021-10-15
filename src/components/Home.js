import React from 'react'
import { useState } from 'react';
import { BASE_URL } from '../constraints';
import UserForm from './User/UserForm';
import '../components/Styles/Home.css'



function Home() {
    const [users, setUsers] = useState([]);

    // CREATE

  function createUser(user) {
    fetch(BASE_URL + "users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUsers([...users, json]));

  }
          
    

    return (
        <div className="container">
        
        <h1 className="header">The Indigo Room Blogs</h1>
        
        <div className="homebox">
            <h2>It is {new Date().toLocaleTimeString()}.</h2>

        </div>
    
        <h2 className="header2">Register to Create Your Account Below</h2>
        <div className="homebox1"> 
        <p>You don't have to blog to register.</p>
        <p>But you do have to register to blog!</p>
        <p>You can read blogs, post a blog or comment on one.</p>
        <p>Once your user account is created, your last name and email address will no longer be visible on the screen; however, it will be visible to you on your private user profile.</p> 
        </div>
          <div className="userForm">
    
          <UserForm createUser={createUser} />
        </div>
        </div>


    
        
    );
}

export default Home;