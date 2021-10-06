// import { useHistory } from "react-router-dom";
import { useState } from "react";




function UserForm({createUser}) {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [user_name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const user = {first_name, last_name, user_name, email};

  
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(user)


   

    }


    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="user-form">
  
  <label className='form-label'>First Name</label>
  <input type="text"
  placeholder='Type First Name Here'
  required 
  value={ first_name }
  onChange={(e) => setFirstName(e.target.value)} />


  <label className="form-label">Last Name</label>
  <input type="text"
  placeholder='Type Last Name Here' 
  value={ last_name }
  onChange={(e) => setLastName(e.target.value)} />

 <label className="form-label">User Name</label>
  <input type="text"
  placeholder='Create a User Name' 
  value={ user_name }
  onChange={(e) => setUserName(e.target.value)} />

 <label className="form-label">Email Address</label>
  <input type="text"
  placeholder='Type your email address' 
  value={ email }
  onChange={(e) => setEmail(e.target.value)} />


<button>Submit</button>
<br />
<br />
<br />
<p>First Name: { first_name }</p>
<p>Last Name: { last_name }</p>
<p>User Name; { user_name }</p>
<p>Email Address: { email }</p>
</form>
           
        </div>
    );
}

export default UserForm;