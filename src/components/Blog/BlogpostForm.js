import React, { useState } from 'react';


function BlogpostForm({ createBlogpost }) {
  const [formData, setFormData] = useState({title: "", content: "", img_url: ""})
    

    function handleChange(e) {
      formData[e.target.name] = e.target.value
      setFormData({...formData})
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlogpost(formData)
        setFormData({title: "", content: "", img_url: ""})
        
        
    }
     

    return (
    
        <form onSubmit={handleSubmit} className="blogpost-form">
         <label className="form-label">Blog Title:</label>
        <input
          type="text"
          placeholder='Title..'
          onChange={handleChange} name="title" value={formData.title}
          />

         <label className="form-label">Blog:</label>
        <input
          type="text"
          placeholder='Begin Typing Here...'
          onChange={handleChange} name="content" value={formData.content}
          />
        
         <label className="form-label">Include an image to your blog:</label>
        <input
          type="text"
          placeholder='Paste Image Url...'
          onChange={handleChange} name="img_url" value={formData.img_url}
        />

        <button type="submit">Submit</button>

            
      </form>
      
            

    );
}

export default BlogpostForm;