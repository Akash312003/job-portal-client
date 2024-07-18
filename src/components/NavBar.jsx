import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'


const NavBar = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler =()=> {
        setIsMenuOpen(isMenuOpen)

    }
    const navItems =[
        {path: "/", title:"Start a search "},
        {path: "/my-job", title:"My Jobs"},
        {path: "salary", title:"Salary Estimate "},
        {path: "/post-job", title:"Post A Job "},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a href='/' className='flex items-center gap-2 text-2xl text-black'>
                <svg
                 width="29"
                  height="30" 
                  viewBox="0 0 29 30"
                   fill="none"
                    xmlns="http://www.w3.org/2000/svg">
<g id="Group 3">
<circle id="Ellipse 8"
cx="12.0143" 
cy="12.5143"
r="12.0143"
fill="#3575E2"
fill-opacity="0.4"/>
<circle id="Ellipse 9"
cx="16.9857"
cy="17.4857"
r="12.0143"
fill="#3575E2"/>
</g>
</svg>
 <span>Job Portal</span></a>
 <ul className='hidden md:flex gap-12 '>
    {
        navItems.map(({path,title}) =>(
            <li key={path} className='text-base text-primary'>
                  <NavLink
                    to={path}
                    className={({ isActive}) =>isActive? "active": ""}
                  >
                    {title}
                  </NavLink>
            </li>
        )
            
        )
    }
 </ul>
 <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
    <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
    <Link to="/sign-up" className="py-2 px-5 border rounded bg bg-blue text-white">Sign up</Link>
 </div>
 
 <div className="md:hidden block">
    <button onClick ={handleMenuToggler}>
      {
        isMenuOpen ? <FaXmark className='className='w-5 h-5 text-primary/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
      }
    
    </button>
</div>
</nav>

    </header>
  );
};

export default NavBar;