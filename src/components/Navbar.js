import React, { useState} from 'react';
import { Link } from "react-router-dom" 
import "./navbar.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
const Navbar = ()=>{
    const [Mobile,setMobile]=useState(false)

    return(
     <nav className='navbar'>
        <div className='container'>
        <h3 className='logo'>Logo</h3>
        <ul className={Mobile ? ".nav-links-mobile" :"nav-links"} onClick={()=>setMobile(false)}>

<Link to='/'><li>Home</li></Link>
<Link to='/about'><li>About us</li></Link>
<Link to='/admission'><li>Admission</li></Link>
<Link to='/administration'><li>Administration</li></Link>
<Link to='/academics'><li>Academics</li></Link>
<Link to='/faq'><li>FAQ</li></Link>
<Link to='/gallery'><li>Gallery</li></Link>
<Link to='/examination'><li>Examination</li></Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() =>setMobile(!Mobile)}>
            {Mobile? <ImCross /> :<FaBars/>}      
              </button>
        </div>
     </nav>
     
    )
}
export default Navbar