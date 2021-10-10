import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constraints/index.js";



export default function BlogpostDetails() {
    const [blogpost, setBlogpost] = useState("");
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'blogposts/' + id)
        .then((res) => res.json())
        .then((json) => setBlogpost(json));
    }, [id]);
  
    useEffect(() => {
        console.log(blogpost);
    }, [blogpost]);
    
  
    return (
    <div>
        {blogpost && (
        <>
        <p>Blogger: {blogpost.user.user_name}</p>
        <p> {blogpost.title} </p>
        <p>{blogpost.content} </p>
        <p> <img  className="ui medium rounded image" src={blogpost.img_url} alt="" /> </p>
        
        </>
    )}
    </div>
    
    );

}