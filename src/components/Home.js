import React from 'react'
import { useState } from 'react';
import { BASE_URL } from '../constraints';
import UserForm from './User/UserForm';



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
        <div className="box">
        
        <h1 className="header">Welcome to The Indigo Room Blogs</h1>
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>

        
    
        <h2>Register to Create Your Account Below</h2>
            
        <p>You don't have to blog to register.</p>
        <p>But you do have to register to blog!</p>
        <p>You can read blogs, post a blog or comment on one.</p>
        <p>Once your user account is created, your last name and email address will no longer be visible on the screen; however, it will be visible to you on your private user profile.</p> 
        <div className="userForm"></div>
          </div>
          <UserForm createUser={createUser} />
        
        </div>


    
        
    );
}

export default Home;