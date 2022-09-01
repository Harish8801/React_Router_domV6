import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return <>
    <ul>
        <li>
        {/* jaisee a tag se link krte h vaise vi react me es tarah link krte h */}
            <Link to={"/"}>Home</Link>
        </li>
        <li><Link to={"/about"}>About</Link></li>
    </ul>
  </>
    
  
}

export default Header
