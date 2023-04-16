import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import { useNavigate } from "react-router-dom";
function Head(){
    const navigate = useNavigate()  
    return (
        <nav id='nav'>
            <li id='hash'>Resume Builder</li>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/Login' >Login</Link></li>
                <li><Link to='/Contact' >Contact</Link></li>
            </ul>
        </nav>

    )
}
export default Head;