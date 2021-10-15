import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/users">BLOGGERS</Link>
                <Link to="/blogposts">BLOGS</Link>
                

                
                
    
        </nav>
    );
}

export default Navbar;