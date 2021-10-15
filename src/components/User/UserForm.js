
import { useState } from "react";




function UserForm({createUser}) {

    const [formData, setFormData] = useState({first_name: "", last_name: "", user_name: "", email: ""});
    

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert('Your user information was submitted Successfully')
        createUser(formData)
        setFormData({first_name: "", last_name: "", user_name: "", email: ""})
    }
    

   


    return (
        <div className="userForm-container">



<form className="userForm">
            <label>First Name: </label>
            <input onChange={handleChange} name="first_name" value={formData.first_name}/>
            <label>Last Name: </label>
            <input onChange={handleChange} name="last_name" value={formData.last_name}/>
            <br/>
            <label>User Name: </label>
            <input onChange={handleChange} name="user_name" value={formData.user_name}/>
            <label>Email: </label>
            <input cols="15" onChange={handleChange} name="email" value={formData.email}/>
            <br/>
            <button className="button" onClick={handleSubmit}>Submit</button>
            
                        <br />
                        <br />
                        <br />
                        <div className="userForm-Details">
                        <p>First Name: { formData.first_name }</p>
                        <p>Last Name: { formData.last_name }</p>
                        <p>User Name; { formData.user_name }</p>
                        <p>Email Address: { formData.email }</p>
                        </div>
            </form>
           
        </div>
    );
}

export default UserForm;