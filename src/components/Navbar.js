import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-sm">
        <nav className="navbar d-flex justify-content-center fw-bolder">
            <div className="links">
                <Link to="/">Home</Link><br/>
                <Link to="/users">Users</Link><br/>
                <Link to="/blogposts">Blogs</Link><br/>
                
                
            </div>
        </nav>
        </div>
    );
}

export default Navbar;