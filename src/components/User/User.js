import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function User({user, updateUser, deleteUser, initialDelay=0}) {


    const [newUser, setNewUser] = useState({...user});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newUser}
        updatedValue[e.target.name] = e.target.value;
        setNewUser({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateUser(newUser);
       alert('Your update was submitted Successfully')
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="user-container">

    <div className="user-card">
      
    <Link to={`/users/${user.id}`}>
        <p>User Name: {user.user_name}</p>
      </Link>
      <p>First Name: {user.first_name}</p>
      <p>User Name: {user.user_name}</p>
      <p>Last Name: Hidden </p>
      <p>Email: Hidden </p>

      <div className="userForm-container">
      {editMode && (
        <>
          <button className="button" onClick={() => deleteUser(user)}>Delete</button>

          <form className="userForm" onSubmit={handleUpdate}>
          
            <input name="first_name" value={newUser.first_name} onChange={handleChange} />
          
            <input name="last_name" value={newUser.last_name} onChange={handleChange} />
          
            <input name="user_name" value={newUser.user_name} onChange={handleChange} />
          
            <input name="email" value={newUser.email} onChange={handleChange} />
            <button className="button" type="submit">Update</button>
          </form>
        </>
      )}
      <button className="button" onClick={toggleEdit}>Edit</button>
    </div>
    <hr/>
    </div>
    </div>
  );

}

export default User;