import React, { useState,useEffect,useRef} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoSearch } from "react-icons/io5";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from './Logo';
import { useWeather } from './ProviderWeather';
const Navbar = ({ src}) => {
  const [nav, setNav] = useState(false);
  const {handleChange}= useWeather();
  const menuRef=useRef();
  const handleNav = () => {
    setNav(!nav);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Weather Conditions', path: '/forecast' },
    { id: 3, text: 'Graphiques', path: '/graph' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='flex items-center gap-5 mx-0 w-full md:max-h-[9%] bg-sky-400/95 max-h-16 fixed top-0 left-0 overflow-hidden md:pe-20 z-50'>
      {/* Logo */}
 
        <div className="logo w-full px-5 md:hidden lg:block">
          <Logo src={src} className='max-w-1/2 rounded-full object-cover max-h-28 block' />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex  order-8 items-center justify-center gap-2'>
          {navItems.map(item => (
           <li
  key={item.id}
  className='px-4 py-2 m-2 cursor-pointer duration-300 flex items-center text-slate-100  hover:text-gray-700 hover:font-semibold relative text-lg w-fit  after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300  text-nowrap  '
>
  {item.text}
</li>

          ))}
          <li key={"srch_icon"} className='flex items-center cursor-pointer justify-center text-slate-100 hover:text-gray-700'>
            <IoSearch size={20} onClick={(e)=>handleChange(e)} />
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='flex gap-4 z-20 md:hidden order-4 pe-5'>
          {nav ? null : (
            <>
              <AiOutlineMenu size={25} className='text-slate-100 cursor-pointer hover:text-gray-200' />
              <IoSearch size={25} onClick={(e)=>handleChange(e)} className='text-slate-100 cursor-pointer hover:text-gray-200' />
            </>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul ref={menuRef} className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-sky-400 ease-in-out duration-500 z-10 shadow-black shadow-xl' : 'ease-in-out w-[60%] duration-50 top-0 bottom-0 left-[-100%] relative'}>
          <li key='closeBtn' className='relative'>
            <AiOutlineClose onClick={handleNav} size={25} className='text-slate-100 absolute top-1 right-2 cursor-pointer' />
          </li>
          {navItems.map(item => (
            <li key={item.id} className='px-4 py-2 m-2 cursor-pointer duration-300 flex items-center text-slate-100  hover:text-gray-700 hover:font-semibold relative text-lg w-fit  after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-nowrap '>
              {item.text}
            </li>
          ))}
        </ul>
   
    </div>
  );
};

export default Navbar;
