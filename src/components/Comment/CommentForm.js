import React, { useState } from 'react';


function CommentForm({ createComment }) {
  const [formData, setFormData] = useState({remark: ""})
    

    function handleChange(e) {
      formData[e.target.name] = e.target.value
      setFormData({...formData})
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        createComment(formData)
        setFormData({remark: ""})
        
        
    }
     

    return (
    
        <form onSubmit={handleSubmit} className="blogpost-form">
         <label className="form-label">Comment:</label>
        <input
          type="text"
          placeholder='Your comment..'
          onChange={handleChange} name="remark" value={formData.remark}
          />

        <button type="submit">Submit</button>

            
      </form>
      
            

    );
}

export default CommentForm;