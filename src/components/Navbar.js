import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-sm">
        <nav className="navbar d-flex justify-content-center fw-bolder">
            <div className="links">
                <Link to="/">Home</Link><br/>
                {/* <Link to="/UserContainer">Bloggers</Link><br/>
                <Link to="/BlogpostContainer">Blogs</Link><br/> */}
                
            </div>
        </nav>
        </div>
    );
}

export default Navbar;