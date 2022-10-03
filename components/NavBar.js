import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import NavbarDropdown from './Dropdowns/NavbarLogin';
import { useState } from 'react';



const Navbar = () => {

  const [isHover, setIsHover] = useState(false);
  const [isMore, setIsMore] = useState(false);

  return (
    <div className="h-[3.7rem] w-[100%] bg-blue-500 text-white shadow-md 
      shadow-black
      flex items-center px-5 fixed z-10 top-0 justify-center space-x-[4rem]">


      <span className="font-semibold text-xl 
       text-yellow-200 italic border px-2 rounded-br-lg
       rounded-tl-lg border-pink-300">
         <Link href="/"><a>Blipkart</a></Link>
      </span>


      
      <span className='w-[30%] min-w-[10rem]'>
      <input 
        className="h-[2.3rem] text-black px-3 pr-[22%] w-[100%]
         rounded-br-md rounded-tl-md truncate outline-none"
        placeholder="Search for products, brands and more"
      />
       
        <SearchIcon fontSize="large" 
         className='text-green-300 
         p-1 ml-[-2.5rem] fixed'/>
    
      </span>

      
      <div onMouseLeave={()=>{setIsHover(false)}} onMouseOver={()=>{setIsHover(true)}} 
      className="bg-white text-violet-700 w-[9rem] h-[2.2rem] 
       rounded-sm font-semibold flex justify-center items-center">
        <span className='cursor-pointer'>Login</span>
    

      {isHover ? (
         <div className='px-[3rem] py-[2rem] font-medium
         absolute bg-orange-400 top-[3rem] shadow-md shadow-black
         rounded-lg z-40'><NavbarDropdown/></div>
      ) : (<ul></ul>)}
      </div>
  
      
      <span className='hidden xl:flex'>
        <Link
         href="/becomeaseller"
         as="becomeaseller"
         rel="stylesheet preload prefetch"
        >
         <a>Become a Seller</a>
        </Link>
      </span>
      <span className='hidden lg:flex'>
      <div onMouseLeave={()=>{setIsMore(false)}} onMouseOver={()=>{setIsMore(true)}} 
      className="text-violet-700 w-[9rem] h-[2.2rem] 
       rounded-sm font-medium flex justify-center items-center">
      <span className='cursor-pointer text-white'>More 
      <KeyboardArrowDownIcon className={isMore && "rotate-180"} fontSize="small"/></span>
    

      {isMore ? (
         <div className='px-[3rem] py-[2rem] font-medium
         absolute bg-orange-400 top-[3rem] shadow-md shadow-black
         rounded-lg z-20'><NavbarDropdown/></div>
      ) : (<ul></ul>)}
      </div>
      </span>
      <span className='hidden md:flex'>
        <Link href="/cart"><a><ShoppingCartIcon/> Cart</a></Link></span>
      
    </div>
  );
}


export default Navbar;