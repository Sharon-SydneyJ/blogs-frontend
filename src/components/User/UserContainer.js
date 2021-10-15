import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../../constraints/index.js";
import User from './User';


function UserContainer() {
    
    const [users, setUsers] = useState([]);


  // READ

  useEffect(() => {
    fetch(BASE_URL + "users")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch users');
          }
          return res.json();
        })
      .then(json => {
          setUsers(json);
      })
      .catch(error => {
          console.error('Danger Will Robinson there is a prolem with your fetch request', error);
      })
  }, []);

  function populateUsers() {
    console.log(users);
    return users.map((user, id) => (
      <User user={user} updateUser={updateUser} deleteUser={deleteUser} key={user.id} />
    ));
  }

 

  //  UPDATE
       
  function updateUser(user) {
    fetch(BASE_URL + "users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });
  
  const newUsers = users.map ((nuser) => {
    if (nuser.id === user.id) {
        nuser = user;
    }
    
    return nuser;
});
setUsers(newUsers);
}

function deleteUser(user) {
  fetch(BASE_URL + "users/" + user.id, {
    method: "DELETE",
  });
  const newUsers = users.filter((nuser) => nuser.id !== user.id);
  setUsers(newUsers);
  alert('Your user information was Successfully deleted from our database! Thank you for visiting The Indigo Room Blogs!')
}
    
    return (
        <div className="box">
        <h1 className="header">Bloggers</h1>
        
        <div className="userForm">

    
        </div>
        <div className="user-container">
          {users && populateUsers()}
          </div>
        
      </div>
    );
}

export default UserContainer;