import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles/Navbar.css'

function Navbar() {
    return (
        <div className="container-sm">
        <nav className="navbar">
            <div className="links">
                <Link to="/">HOME</Link><br/>
                <Link to="/users">BLOGGERS</Link><br/>
                <Link to="/blogposts">BLOGS</Link><br/>
                

                
                
            </div>
        </nav>
        </div>
    );
}

export default Navbar;