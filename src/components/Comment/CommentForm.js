import React, { useState } from 'react';


function CommentForm({ createComment }) {
  const [formData, setFormData] = useState({remark: ""})
    

    function handleChange(e) {
      formData[e.target.name] = e.target.value
      setFormData({...formData})
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Congratulations! Your comment was Successfully added to our database! Thank you for')
        createComment(formData)
        setFormData({remark: ""})
        
        
    }
     

    return (
    
        <form onSubmit={handleSubmit} className="blogpost-form">
         <label className="form-label">Comment:</label>
        <textarea
          type="text" rows="3" cols="100"
          placeholder='Your comment..'
          onChange={handleChange} name="remark" value={formData.remark}
          />
          <br/>

        <button type="submit">Submit</button>

            
      </form>
      
            

    );
}

export default CommentForm;