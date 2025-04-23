import React, { useState } from 'react';
import Links from '../Links/Links';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
 

const Navbar = () => {
    const [open,stateOpen] = useState(false);
    const linkss=navLinks.map(link=><Links key={link.id} link={link}></Links>);
    return (
        <div className='flex justify-between'> 
            <h1 className='hidden md:block'>DaisyUi</h1>
            <span className='flex gap-5 md:hidden' onClick={() => stateOpen(!open)}>
                { open ? <X></X> : <Menu></Menu> }
               
               <ul className={`md:hidden absolute duration-1000 rounded-3xl p-4  bg-amber-400 ${open ? 'top-8': '-top-64'}`}>
                {
                    linkss
                }
               </ul>
            
            </span>
            
            
            <ul className='md:flex hidden '>
            {
                linkss
            }
            </ul>
            <button>Sign In</button>

            
            {/* <ul className='flex '>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/Home">Contact</a></li>
                <li className='mr-10'><a href="/contact">Blog</a></li>
                <li className='mr-10'><a href="/Blog">Address</a></li>
                <li className='mr-10'><a href="/LOgout">Logout</a></li>

            </ul> */}
            
        </div>
    );
};

export default Navbar;


// import React from 'react';
// import Links from '../Links/Links';

// const navLinks = [
//   { id: 1, name: "Home", path: "/" },
//   { id: 2, name: "About", path: "/about" },
//   { id: 3, name: "Services", path: "/services" },
//   { id: 4, name: "Blog", path: "/blog" },
//   { id: 5, name: "Contact", path: "/contact" }
// ];

// const Navbar = () => {
//   return (
//     <div>
//       <ul className='flex'>
//         {
//           navLinks.map(link => <Links key={link.id} link={link} />)
//         }
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
