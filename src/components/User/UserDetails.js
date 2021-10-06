
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constraints/index.js";



export default function UserDetails() {
    const [user, setUser] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'users/' + id)
        .then((res) => res.json())
        .then((json) => setUser(json));
    }, [id]);
  
    useEffect(() => {
        console.log(user);
    }, [user]);
    
  
    return (
      <div>
          {user && (
          <>
          <p> {user.first_name} </p>
          <p>{user.user_name} </p>
          {/* <p>{user.blogposts}</p> */}
          
          </>
      )}
      </div>
      
      );
  
  }
  
  
