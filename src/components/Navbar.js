import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () =>{
    return(
        <div>
        <h2 class="menu1"><Link to="/">Home</Link></h2>
        <h2 class="menu1"><Link to="/projects">Projects</Link></h2>
        <h2 class="menu1"><Link to="/certificate">Certificates</Link></h2>
        <h2 class="menu1"><Link to="/education">Education</Link></h2>
        <h2 class="menu1"><Link to="/languages">Languages</Link></h2>
        </div>
    )
}


export default Navbar;