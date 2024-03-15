import React from 'react';
import {Link,NavLink} from "react-router-dom";


const Home =()=>{

    return (
        <div>
             <div>
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/About">About</Link></li>
                </ul>
             </div>
             <h1>Welcome to my website!</h1>
        </div>
    )
}


export default Home;