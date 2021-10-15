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
       alert('Congratulations! Your blogpost was Successfully updated in our database! Click your Blog Title to view updates after clicking OK!')
       updateBlogpost(newBlogpost);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(


    <div className="blogpost-container">
        

    <div className="blogpost-card">
     
      <Link to={`/blogposts/${blogpost.id}`} style={{color: 'grey'}}>
      <p>Title: {blogpost.title}</p>
      </Link>
        <p>Blogger: {blogpost.user.user_name}</p>
      {editMode && (
        <>
          <button onClick={() => deleteBlogpost(blogpost)}>Delete</button>

        <form onSubmit={handleUpdate}>
          <label className='form-label'>Blog Title:</label>
            <textarea type="text" rows="3" cols="100" name="title" 
            value={newBlogpost.title} onChange={handleChange} />
            <br/>
            <br/>
          <label className='form-label'>Blog Content:</label>
            <textarea type="text" rows="25" cols="100" name="content" 
            value={newBlogpost.content} onChange={handleChange} />
            <br/>
            <br/>
          <label className='form-label'>Blog Image:</label>
            <textarea type="text" rows="3" cols="100" name="img_url" value={newBlogpost.img_url} onChange={handleChange} />
          
    
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    <hr/>
    </div>
  );
      }
      export default Blogpost;