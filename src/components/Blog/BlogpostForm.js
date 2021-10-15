import React, { useState } from 'react';


function BlogpostForm({ createBlogpost }) {
  const [formData, setFormData] = useState({title: "", content: "", img_url: ""})
    

    function handleChange(e) {
      formData[e.target.name] = e.target.value
      setFormData({...formData})
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your Blogpost was successfully submitted to our database! Please click BLOGS link at the top of your screen to view your new posted Blog!')
        createBlogpost(formData)
        setFormData({title: "", content: "", img_url: ""})
        
        
    }
     

    return (
    
        <form onSubmit={handleSubmit} className="blogpost-form">
         <label className="form-label">Blog Title:</label>
         <br/>
        <textarea
          type="text" rows="3" cols="100"
          placeholder='Title..'
          onChange={handleChange} name="title" value={formData.title}
          />
          <br/>
          <br/>
          <hr></hr>

         <label className="form-label">Blog:</label>
         <br/>
         <textarea rows="25" cols="100"
          type="text"
          placeholder='Begin Typing Here...'
          onChange={handleChange} name="content" value={formData.content}
          ></textarea>
          <br/>
          <br/>
          <hr></hr>
        
         <label className="form-label">Include an image to your blog:</label>
         <br/>
        <textarea
          type="text" rows="3" cols="100"
          placeholder='Paste Image Url...'
          onChange={handleChange} name="img_url" value={formData.img_url}
        ></textarea>
        <br/>

        <button type="submit">Submit</button>
        <br/>
        <br/>
        <hr></hr>

            
      </form>
      
            

    );
}

export default BlogpostForm;