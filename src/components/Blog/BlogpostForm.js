import React, { useState } from 'react';


function BlogpostForm({ createBlogpost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img_url, setImg_url] = useState("");
    const blogpost = {title, content, img_url}

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlogpost(blogpost)
        

    }
     

    return (
    
        <form onSubmit={handleSubmit} className="blogpost-form">
         <label className="form-label">Blog Title:</label>
        <input
          type="text"
          placeholder='Title..'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />

         <label className="form-label">Blog:</label>
        <input
          type="text"
          placeholder='Begin Typing Here...'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          />
        
         <label className="form-label">Include an image to your blog:</label>
        <input
          type="text"
          placeholder='Paste Image Url...'
          onChange={(e) => setImg_url(e.target.value)}
          value={img_url}
        />
        <button type="submit">Submit</button>
      </form>
      
            

    );
}

export default BlogpostForm;