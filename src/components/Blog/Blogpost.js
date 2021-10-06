import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Blogpost({blogpost, updateBlogpost, deleteBlogpost, initialDelay=0}) {


    const [newBlogpost, setNewBlogpost] = useState({...blogpost});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newBlogpost}
        updatedValue[e.target.name] = e.target.value;
        setNewBlogpost({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateBlogpost(newBlogpost);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(


    <div className="blogpost-container">
        

    <div className="blogpost-card">
     
      <Link to={`/blogposts/${blogpost.id}`}>
      <p>Title: {blogpost.title}</p>
      </Link>
        <p>Blogger: {blogpost.user.user_name}</p>
      {editMode && (
        <>
          <button onClick={() => deleteBlogpost(blogpost)}>Delete</button>

          <form onSubmit={handleUpdate}>
            <input name="title" value={newBlogpost.title} onChange={handleChange} />
            <input name="content" value={newBlogpost.content} onChange={handleChange} />
            <input name="img_url" value={newBlogpost.img_url} onChange={handleChange} />
            <input name="user_name" value={newBlogpost.img_url} onChange={handleChange} />
    
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );
      }
      export default Blogpost;